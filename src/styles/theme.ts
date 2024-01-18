import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    red: '#F23557',
    lightBlue: '#98BFF2',
    darkBlue: '#013059',
    gray: '#5F5F5F',
    black: '#2F2F2F',
    opacityBlack: '#2F2F2FCC',
    shadowBlack: '#00000040',
    white: '#FFFFFF',
  },
  breakpoints: {
    phone: '(min-width: 420px)',
    tablet: '(min-width: 920px)',
    desktop: '(min-width: 1200px)',
  },
  fonts: {
    main: `'Inter', sans-serif`,
  },
  fontSizes: {
    xxs: '.2rem',
    xs: '.5rem',
    s: '1rem',
    m: '1.2rem',
    l: '1.5rem',
    xl: '1.8rem',
    xxl: '2rem',
  },
  spaces: {
    xxs: '.2rem',
    xs: '.5rem',
    s: '.8rem',
    m: '1.2rem',
    l: '1.5rem',
    xl: '1.8rem',
    xxl: '2rem',
  },
};
