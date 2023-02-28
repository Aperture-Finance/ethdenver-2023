import React from 'react';
import { Variant, variants, ThemedProps, TagProps } from './types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { styleVariants } from './theme';
import { useMatchBreakpoints } from '../../contexts';

const getWidth = (variant: Variant = variants.AVAILABLE, sm = false) => {
  if (variant === variants.AVAILABLE || variant === variants.FULL) {
    return sm ? '63px' : '89px';
  } else {
    return sm ? '53px' : '64px';
  }
};

const StyledTag = styled.div<ThemedProps>`
  border-radius: 8px;
  height: ${({ sm }) => (sm ? '23px' : '22px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: capitalize;
  ${variant({ variants: styleVariants })}
  width: ${({ variant, sm }) => getWidth(variant, sm)};
`;

const Tag: React.FC<TagProps> = ({ ...props }) => {
  const { isSm } = useMatchBreakpoints();
  return (
    <StyledTag {...props} sm={isSm}>
      {props.variant}
    </StyledTag>
  );
};

Tag.defaultProps = {
  variant: 'available',
};

export default Tag;
