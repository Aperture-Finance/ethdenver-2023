import React from "react";
import styled from "styled-components";
import { PositionCardProps } from "./types";
import { Number, SubSubtitle, Subtitle } from "@aperture/uikit";
import { Button, SMBtn } from "@aperture/uikit";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import LimitOrderABI from "@/config/ABI/LimitOrder.json";
import {utils} from "ethers";
import { numberParse } from "@/utils/numberFormat";

const StyledBox = styled.div`
  border-radius: 16px;
  background-color: black;
  color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  width: calc(100% - 32px);
  padding: 16px 16px;
  align-items: center;
  position: relative;
  margin: 20px 0px;
  cursor: default;
  transition: all 0.3s ease-in-out;
  :hover {
    color: black;
    background-color: white;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  }
  display: grid;
  grid-template-columns: 1.6fr 1fr;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledButton = styled(Button)<{ outline: boolean }>`
  width: calc(100% - ${({ outline }) => (outline ? "20px" : "48px")});
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
  opacity: 0.6;
  margin-bottom:8px;
`;

const StyledImg = styled.img`
width: 100%;
`

const PositionCard: React.FC<PositionCardProps> = ({
  positionId,
  tokens,
  position,
  nft,
}) => {
  const { config } = usePrepareContractWrite({
    address: getstrategyAddress("limitOrder", 80001),
    abi: LimitOrderABI,
    functionName: "cancelLimitOrder",
    args: [position.positionId],
  });
  const { write: withdraw } = useContractWrite(config);
  const progress = parseFloat(utils.formatEther(position[position.isZeroForOne?'amount1':'amount0'])) / parseFloat(utils.formatEther(position.desiredAmount))
  const amount0 = utils.formatEther(position[position.isZeroForOne?'amount0':'amount1'])
  const amount1 = utils.formatEther(position.desiredAmount)

  const uri = window.atob(nft.replace('data:application/json;base64,', ''));
  const safeURL = new URL(JSON.parse(uri).image);
  
  return (
    <StyledBox>
      <span>
      <div>
        <SMTT>Position: No.{positionId} { }</SMTT>
        <Flex>
          <span style={{ marginTop: "-1px" }}>{tokens[position.isZeroForOne?0:1].icon}</span>
          <span style={{ marginLeft: "-5px", marginRight: "10px" }}>
            {tokens[position.isZeroForOne?1:0].icon}
          </span>
          {tokens[position.isZeroForOne?0:1].ticker}/{tokens[position.isZeroForOne?1:0].ticker}
          <StyledSMBTN>{position.fee /10000}%</StyledSMBTN>
        </Flex>
        <span style={{ fontSize: "14px", opacity: "0.7" }}>
          <Number>{numberParse(amount0)}</Number> 
          {tokens[position.isZeroForOne?0:1].ticker} {"<->"} 
          <Number>{numberParse(amount1)}</Number>
          {" "}
          {tokens[position.isZeroForOne?1:0].ticker}
        </span>
        <Porgress>{position.completed?"CLOSED":progress.toFixed(2)+"%"}</Porgress>
        </div>
      <StyledButton outline={position.completed} primary={!position.completed} onClick={()=> !position.completed && withdraw?.()}>
        {position.completed ? (
          <>
            Tokens already sent to your wallet ;)
          </>
        ) : (
          <> 
            Withdraw {(1 - progress) * parseFloat(amount0)}{" "}
            {tokens[0].ticker} and {progress * parseFloat(amount1)}{" "}
            {tokens[1].ticker}
          </>
        )}
      </StyledButton>
      </span>
      <div>
        <StyledImg src={safeURL.href}/>
      </div>
    </StyledBox>
  );
};
export default PositionCard;

