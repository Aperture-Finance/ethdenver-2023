import 'styled-components';
import { ApertureTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ApertureTheme {}
}
