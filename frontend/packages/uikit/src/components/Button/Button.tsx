import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Btn = styled.div<{
  primary?: boolean;
  error?: boolean;
  outline?: boolean;
}>`
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ error, theme, primary, outline }) =>
    error
      ? theme.colors.gray2
      : primary
      ? theme.colors.primary
      : outline
      ? "transparent"
      : theme.colors.gray};
  border: 1px solid
    ${({ theme, primary, error, outline }) =>
      primary && !error
        ? theme.colors.primary
        : outline
        ? "transparent"
        : theme.colors.gray2};
  width: fit-content;
  justify-content: center;
  align-items: center;
  ${({ outline }) =>
  outline ? "padding: 8px 0px ": "padding: 8px 16px;"}
  display: flex;
  align-items: center;
  cursor: ${({ error }) => (error ? "not-allowed" : "pointer")};
  color: ${({ error, primary, theme, outline }) =>
    error
      ? "red"
      : primary
      ? "white"
      : outline
      ? theme.colors.primary2
      : "black"};
  &:hover {
    background-color: ${({ error, primary, theme, outline }) =>
      error
        ? theme.colors.gray2
        : primary
        ? theme.colors.primary2
        : outline
        ? "transparent"
        : theme.colors.gray1};
    ${({ outline, theme }) =>
      outline ? "color: " + theme.colors.primary + ";" : ""}
    transition: background-color 0.2s ease-in-out;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;

const SmallBtn = styled.div`
  font-size: 14px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary2};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const SMBtn: React.FC<ButtonProps> = ({
  primary,
  error,
  children,
  ...props
}) => {
  return <SmallBtn {...props}>{children}</SmallBtn>;
};
