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

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 5px;
  ${space}
  ${layout}
  ${color}
`;
export const Title: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledTitle {...props}>{children}</StyledTitle>;

const StyledSubtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5px;
  ${space}
  ${layout}
  ${color}
`;
export const Subtitle: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledSubtitle {...props}>{children}</StyledSubtitle>;

const StyledSubSubtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5px;
  ${space}
  ${layout}
  ${color}
`;
export const SubSubtitle: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledSubSubtitle {...props}>{children}</StyledSubSubtitle>;

const StyledSubSubSubtitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  ${space}
  ${layout}
  ${color}
`;
export const SubSubSubtitle: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledSubSubSubtitle {...props}>{children}</StyledSubSubSubtitle>;

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
