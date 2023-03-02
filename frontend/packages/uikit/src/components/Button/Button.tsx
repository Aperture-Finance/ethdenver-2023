import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Btn = styled.div<{ primary?: boolean; error?: boolean }>`
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ error, theme, primary }) =>
    error
      ? theme.colors.gray2
      : primary
      ? theme.colors.primary
      : theme.colors.gray};
  border: 1px solid
    ${({ theme, primary, error }) =>
      primary && !error ? theme.colors.primary : theme.colors.gray2};
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: ${({ error }) => (error ? "not-allowed" : "pointer")};
  color: ${({ error, primary }) =>
    error ? "red" : primary ? "white" : "black"};
  &:hover {
    background-color: ${({ error, primary, theme }) =>
      error
        ? theme.colors.gray2
        : primary
        ? theme.colors.primary2
        : theme.colors.gray1};
    transition: background-color 0.2s ease-in-out;
  }
`;

const Button: React.FC<ButtonProps> = ({
  primary,
  error,
  children,
  ...props
}) => {
  return (
    <Btn primary={primary} error={error} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
