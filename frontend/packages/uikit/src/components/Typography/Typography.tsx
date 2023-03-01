import React from "react";
import styled from "styled-components";
import { space, layout, color } from "styled-system";

const StyledName = styled.div`
  font-size: 12px;
  opacity: 0.8;
  ${space}
  ${layout}
  ${color}
`;

export const Name: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledName {...props}>{children}</StyledName>;

const StyledTicker = styled.div`
  font-size: 18px;
  ${space}
  ${layout}
  ${color}
`;

export const Ticker: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledTicker {...props}>{children}</StyledTicker>;

const StyledNumber = styled.div`
  font-size: 16px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const Number: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledNumber {...props}>{children}</StyledNumber>;
