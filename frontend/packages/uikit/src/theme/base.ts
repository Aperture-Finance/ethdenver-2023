import {
  MediaQueries,
  Breakpoints,
  Spacing,
  Shadows,
  Radii,
  ZIndices,
} from './types';

export const breakpointMap: { [key: string]: number } = {
  sm: 1200,
  md: 1670,
  lg: 1670,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows: Shadows = {
  default: '0px 8px 40px rgba(0, 0, 0, 0.25)',
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii: Radii = {
  small: '4px',
  default: '16px',
  card: '24px',
  circle: '50%',
};

const zIndices: ZIndices = {
  ribbon: 9,
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200, // to be figured out
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
