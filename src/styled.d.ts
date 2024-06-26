import 'styled-components';

interface IColors {
  lightBlue: string;
  darkBlue: string;
  gray: string;
  black: string;
  opacityBlack: string;
  shadowBlack: string;
  white: string;
  red: string;
}

interface IBreakpoints {
  phone: string;
  tablet: string;
  desktop: string;
}

interface IFonts {
  main: string;
}

interface IFontSizes {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface ISpaces {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    breakpoints: IBreakpoints;
    fonts: IFonts;
    fontSizes: IFontSizes;
    spaces: ISpaces;
  }
}
