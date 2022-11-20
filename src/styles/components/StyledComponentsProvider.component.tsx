import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../theme/GlobalStyles';
import { theme } from '../theme/theme';

interface IStyledComponentsProvider {
  children: React.ReactNode;
}

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
