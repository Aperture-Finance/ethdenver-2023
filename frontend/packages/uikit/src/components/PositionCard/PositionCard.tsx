import React from "react";
import styled from "styled-components";
import { PositionCardProps } from "./types";
import { Number, SubSubtitle, Subtitle } from "../Typography";
import { Button } from "../Button";
const StyledBox = styled.div`
  border-radius: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  width: calc(100% - 20px);
  padding: 10px;
  align-items: center;
  position: relative;
  margin-top: 10px;
  cursor: pointer;
  :hover{
    background-color: ${({theme})=> theme.colors.gray1};
    transition: all 0.3s ease-in-out;
  }
`;
const Flex = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
`;
const StyledButton = styled(Button)`
  width: calc(100% - 50px);
`;
const Porgress = styled.div`
  font-size: 72px;
  background: -webkit-linear-gradient(45deg, #ffaf29 0%, #c000a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
`;
const StyledNumber = styled(Number)`
  display: inline-block;
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

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PositionCard: React.FC<PositionCardProps> = ({
  positionId,
  tokens,
  progress,
}) => {
  return (
    <StyledBox>
      <Flex>
        <div>
          <SubSubtitle>Position Id: {positionId}</SubSubtitle>
          <Center>
            <Subtitle>
              {tokens[0].icon} <StyledNumber>{tokens[0].balance} </StyledNumber>{" "}
              {tokens[0].ticker}
            </Subtitle>
            <StyledArrow />
            <Subtitle>
              {tokens[1].icon} <StyledNumber>{tokens[1].balance} </StyledNumber>{" "}
              {tokens[1].ticker}
            </Subtitle>
          </Center>
        </div>
        <div>
          <Subtitle>Progress:</Subtitle>
          <Porgress>{progress}%</Porgress>
        </div>
      </Flex>
      <StyledButton error={progress >= 100} primary>
        {progress >= 100 ? (
          <>
            {tokens[1].balance} {tokens[1].ticker} has already been sent to your
            wallet ;)
          </>
        ) : (
          <>
            Withdraw {((100 - progress) / 100) * tokens[0].balance}{" "}
            {tokens[0].ticker} and {(progress / 100) * tokens[1].balance}{" "}
            {tokens[1].ticker}
          </>
        )}
      </StyledButton>
    </StyledBox>
  );
};
export default PositionCard;
