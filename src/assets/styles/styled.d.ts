import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

export type ThemeColors = typeof theme.colors;
