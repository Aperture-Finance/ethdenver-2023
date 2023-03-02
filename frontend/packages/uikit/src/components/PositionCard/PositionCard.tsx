import React from "react";
import styled from "styled-components";
import { PositionCardProps } from "./types";

const StyledBox = styled.div<{ error?: boolean }>`
  border-radius: 16px;
  background-color: ${({ error }) => (error ? "#e1e1e1" : "#f9f9f9")};
  border: 1px solid #e1e1e1;
  width: calc(100% - 20px);
  padding: 10px;
  align-items: center;
`;
const PositionCard: React.FC<PositionCardProps> = ({
  positionId,
  tokens,
  progress,
}) => {
  return <StyledBox>hi</StyledBox>;
};
export default PositionCard;
