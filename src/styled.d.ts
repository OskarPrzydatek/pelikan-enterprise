import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: unknown;
    breakpoints: unknown;
    fonts: {
      main: string;
    };
    fontSizes: unknown;
    spaces: unknown;
  }
}
