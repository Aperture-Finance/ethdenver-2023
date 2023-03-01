import { DefaultTheme } from 'styled-components';
import base from './base';
import { lightColors } from './colors';
import { lightGradients } from './gradients';

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  gradients: lightGradients,
};

export default lightTheme;
