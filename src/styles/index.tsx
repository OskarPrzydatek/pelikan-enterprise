import styled, {
  DefaultTheme,
  createGlobalStyle,
  ThemeProvider,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

interface IStyledComponentsProvider {
  children: React.ReactNode;
}

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
    phone: '(min-width: 390px)',
    tablet: '(min-width: 834px)',
    desktop: '(min-width: 1200px)',
  },
  fonts: {
    main: `'Inter', sans-serif`,
  },
  fontSizes: {
    xxs: '.2rem',
    xs: '.5rem',
    s: '.8rem',
    m: '1.2rem',
    l: '1.5rem',
    xl: '1.8rem',
    xxl: '2rem',
  },
  spaces: {
    xs: '.3rem',
    s: '.5rem',
    m: '.8rem',
    l: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
};

export interface ICSS {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
	} 

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
    display: grid;
    grid-template-rows: .5fr 8fr .5fr;
  }

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		padding: 0;
    margin: 0;
		list-style-type: none;
	}
`;

export const StyledComponentsProvider: React.FC<IStyledComponentsProvider> = ({
  children,
}: IStyledComponentsProvider) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export const Main = styled.main`
  padding: ${({ theme }) => theme.spaces.l};
`;

export const PageLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
