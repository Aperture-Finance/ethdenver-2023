import { DefaultTheme } from 'styled-components';
import base from './base';
import { darkColors } from './colors';
import { darkGradients } from './gradients';

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  gradients: darkGradients,
};

export default darkTheme;
