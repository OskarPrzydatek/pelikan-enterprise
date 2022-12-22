import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    lightBlue: '#98BFF2',
    darkBlue: '#013059',
    gray: '#2E4559',
    black: '#21313F',
    white: '#FFFFFF',
  },
  breakpoints: {
    phone: '(min-width: 390px)',
    tablet: '(min-width: 834px)',
    desktop: '(min-width: 1728px)',
  },
  fonts: {
    main: `'Nanum Gothic', sans-serif`,
  },
  fontSizes: {
    xs: '.8rem',
    s: '1rem',
    m: '1.4rem',
    l: '1.8rem',
    xl: '2rem',
    xxl: '3.5rem',
  },
  spaces: {
    xs: '2%',
    s: '5%',
    m: '8%',
    l: '10%',
    xl: '15%',
    xxl: '20%',
  },
};
