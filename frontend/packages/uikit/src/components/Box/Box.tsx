import React from "react";
import styled from "styled-components";

const StyledBox = styled.div<{ error?: boolean }>`
  border-radius: 16px;
  background-color: ${({ error, theme }) => (error ? "#e1e1e1" : "black")};
  width: calc(100% - 20px);
  padding: 10px;
  align-items: center;
`;

const Box: React.FC<React.PropsWithChildren> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

export default Box;
