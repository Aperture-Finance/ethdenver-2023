import React, { useState } from "react";
import styled from "styled-components";
import { Number } from "../Typography";
import { ButtonGroupsProps } from "./types";

const Box = styled(Number)<{ selected?: boolean }>`
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.gray2 : theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  color: black;
  width: 40px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
    transition: background-color 0.1s ease-in-out;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ButtonGroups: React.FC<ButtonGroupsProps> = ({ onSelect }) => {
  const [selected, select] = useState<null | number>(0.05);
  const feeTierRange = [0.01, 0.05, 0.3, 1];
  return (
    <>
      <Wrapper>
        {feeTierRange.map((feeTier) => (
          <Box
            key={"btn" + feeTier}
            selected={feeTier === selected} // @ts-ignore
            onClick={() => {
              if (feeTier !== selected) {
                select(feeTier);
                onSelect(feeTier);
              }
            }}
          >
            {feeTier}%
          </Box>
        ))}
      </Wrapper>
    </>
  );
};

export default ButtonGroups;
