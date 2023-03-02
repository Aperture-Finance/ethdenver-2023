import React from "react";
import styled from "styled-components";
import { PositionCardProps } from "./types";
import { Number, Subtitle } from "../Typography";
import { Button } from "../Button";
const StyledBox = styled.div<{ error?: boolean }>`
  border-radius: 16px;
  background-color: ${({ error }) => (error ? "#e1e1e1" : "#f9f9f9")};
  border: 1px solid #e1e1e1;
  width: calc(100% - 20px);
  padding: 10px;
  align-items: center;
  position: relative;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
const Porgress = styled.div`
  font-size: 72px;
  background: -webkit-linear-gradient(45deg, #FFAF29 0%, #C000A1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
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
          <Subtitle>PositionId:</Subtitle>
          <Number>{positionId}</Number>
          <Subtitle>
            {tokens[0].icon}
            <Number>{tokens[0].balance} </Number>
            {tokens[0].ticker}
          </Subtitle>
          {" => "}
          <Subtitle>
            {tokens[1].icon}
            <Number>{tokens[1].balance} </Number> {tokens[1].ticker}
          </Subtitle>
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
