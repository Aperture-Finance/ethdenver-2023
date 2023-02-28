import { SpaceProps, TypographyProps } from 'styled-system';
import { DefaultTheme } from 'styled-components';

export const variants = {
  CRAB: 'crab',
  BULL: 'bull',
  AVAILABLE: 'available',
  FULL: 'full',
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface TagProps extends SpaceProps, TypographyProps {
  variant: Variant;
}
export interface ThemedProps extends TagProps {
  theme: DefaultTheme;
  sm: boolean;
}
