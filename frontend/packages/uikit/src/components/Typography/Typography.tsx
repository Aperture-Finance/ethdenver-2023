import React from "react";
import styled from "styled-components";
import { space, layout, color } from "styled-system";

const StyledHeading1 = styled.span`
  font-size: 97px;
  font-weight: 700;
  line-height: 106.7px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const Heading1: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <StyledHeading1 {...props}>{children}</StyledHeading1>;

const StyledHeading2 = styled.span`
  font-size: 67px;
  font-weight: 700;
  line-height: 73.7px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const Heading2: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledHeading2 {...props}>{children}</StyledHeading2>;
};

const StyledHeading3 = styled.span`
  font-size: 37px;
  font-weight: 700;
  line-height: 40.7px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const Heading3: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledHeading3 {...props}>{children}</StyledHeading3>;
};

const StyledHeading4 = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 26.4px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const Heading4: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledHeading4 {...props}>{children}</StyledHeading4>;
};

const StyledHeadingB = styled.span`
  font-weight: 400;
  font-size: 29px;
  line-height: 31.18px;
  font-family: "Chakra Petch", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const HeadingButton: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledHeadingB {...props}>{children}</StyledHeadingB>;
};

const StyledBody = styled.span`
  font-weight: 600;
  font-size: 25px;
  line-height: 45px;
  font-family: "Quicksand", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const GenericBody: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledBody {...props}>{children}</StyledBody>;
};

const StyledSubInfo = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 30.6px;
  font-family: "Quicksand", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const GenericSubInfo: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledSubInfo {...props}>{children}</StyledSubInfo>;
};

const StyledMenu = styled.span`
  font-weight: 400;
  font-size: 22px;
  line-height: 35.2px;
  font-family: "Quicksand", sans-serif;
  ${space}
  ${layout}
  ${color}
`;

export const GenericMenu: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <StyledMenu {...props}>{children}</StyledMenu>;
};
