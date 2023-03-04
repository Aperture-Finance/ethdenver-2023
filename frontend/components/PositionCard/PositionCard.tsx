import React from "react";
import styled from "styled-components";
import { PositionCardProps } from "./types";
import { Number, SubSubtitle, Subtitle } from "@aperture/uikit";
import { Button, SMBtn } from "@aperture/uikit";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import LimitOrderABI from "@/config/ABI/LimitOrder.json";
import {utils} from "ethers";

const StyledBox = styled.div`
  border-radius: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  width: calc(100% - 32px);
  padding: 16px 16px;
  align-items: center;
  position: relative;
  margin: 20px 0px;
  cursor: default;
  :hover {
    background-color: white;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`;
const Grid = styled.div``;
const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledButton = styled(Button)<{ outline: boolean }>`
  width: calc(100% - ${({ outline }) => (outline ? "0px" : "48px")});
  ${({ outline }) => outline && "cursor: default;"}
`;
const Porgress = styled.div`
  font-size: 50px;
  background: -webkit-linear-gradient(45deg, #ffaf29 0%, #c000a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
`;
const StyledSMBTN = styled(SMBtn)`
  height: fit-content;
  width: fit-content;
  padding: 2px 8px;
  cursor: default;
`;

const Arrow = (props: any) => (
  <svg
    fill="#a1a1a1"
    height="800px"
    width="800px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 330.002 330.002"
    xmlSpace="preserve"
    {...props}
  >
    <g id="XMLID_7_">
      <path
        id="XMLID_8_"
        d="M315.001,180.001h-300c-6.371,0-12.046,4.024-14.154,10.035c-2.109,6.011-0.19,12.699,4.784,16.678
		l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287l149.996-120
		c4.974-3.98,6.893-10.667,4.784-16.678C327.047,184.024,321.371,180.001,315.001,180.001z M165.005,295.791L57.764,210.001H272.24
		L165.005,295.791z"
      />
      <path
        id="XMLID_11_"
        d="M15.001,150.001h300c6.371,0,12.046-4.024,14.154-10.035c2.109-6.011,0.19-12.699-4.784-16.678
		l-150.004-120c-5.479-4.382-13.262-4.382-18.741,0l-149.996,120c-4.974,3.979-6.893,10.667-4.784,16.678
		C2.955,145.977,8.631,150.001,15.001,150.001z M164.997,34.21l107.241,85.79H57.762L164.997,34.21z"
      />
    </g>
  </svg>
);

const StyledArrow = styled(Arrow)`
  margin-top: 2px;
  width: 20px;
  height: 20px;
`;
const SMTT = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom:8px;
`;

const PositionCard: React.FC<PositionCardProps> = ({
  positionId,
  tokens,
  progress,
  position,
}) => {

  const { config } = usePrepareContractWrite({
    address: getstrategyAddress("limitOrder", 80001),
    abi: LimitOrderABI,
    functionName: "cancelLimitOrder",
    args: [position.positionId],
  });
  const { write: withdraw } = useContractWrite(config);
  //revert
  
  console.log(position, "hi", position.isZeroForOne)
  return (
    <StyledBox>
      <span>
      <div>
        <SMTT>Position: No.{positionId}</SMTT>
        <Flex>
          <span style={{ marginTop: "-1px" }}>{tokens[position.isZeroForOne?0:1].icon}</span>
          <span style={{ marginLeft: "-5px", marginRight: "10px" }}>
            {tokens[position.isZeroForOne?1:0].icon}
          </span>
          {tokens[position.isZeroForOne?0:1].ticker}/{tokens[position.isZeroForOne?1:0].ticker}
          <StyledSMBTN>{position.fee /10000}%</StyledSMBTN>
        </Flex>
        <span style={{ fontSize: "14px", opacity: "0.7" }}>
          <Number>1000</Number> {tokens[position.isZeroForOne?0:1].ticker} {"<->"} <Number>{utils.formatEther("0x00")}</Number>{" "}
          {tokens[position.isZeroForOne?1:0].ticker}
        </span>
        <Porgress>{position.completed?"CLOSED":progress+"%"}</Porgress>
        </div>
      <StyledButton outline={position.completed} primary={!position.completed} onClick={()=> !position.completed && withdraw?.()}>
        {position.completed ? (
          <>
            Tokens already sent to your wallet ;)
          </>
        ) : (
          <>
            Withdraw {((100 - progress) / 100) * tokens[position.isZeroForOne?0:1].balance}{" "}
            {tokens[0].ticker} and {(progress / 100) * tokens[position.isZeroForOne?1:0].balance}{" "}
            {tokens[1].ticker}
          </>
        )}
      </StyledButton>
      </span>
      <div>nft</div>
    </StyledBox>
  );
};
export default PositionCard;

