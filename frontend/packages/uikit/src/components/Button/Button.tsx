import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Btn = styled.div<{ error?: boolean }>`
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ error }) => (error ? "#e1e1e1" : "#f9f9f9")};
  border: 1px solid #e1e1e1;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: ${({ error }) => (error ? "not-allowed" : "pointer")};
  color: ${({ error }) => (error ? "red" : "black")};
  &:hover {
    background-color: ${({ error }) => (error ? "#e1e1e1" : "#f1f1f1")};
    transition: background-color 0.1s ease-in-out;
  }
`;

const Button: React.FC<ButtonProps> = ({ error, children, ...props }) => {
  return (
    <Btn error={error} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
