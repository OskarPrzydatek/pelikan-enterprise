import { ThemeProvider } from 'styled-components';

import { GlobalStyleLayout } from './layouts';
import { theme } from './theme';

interface IStyledComponentsProvider {
  children: React.ReactNode;
}

export const StyledComponentsProvider: React.FC<IStyledComponentsProvider> = ({
  children,
}: IStyledComponentsProvider) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleLayout />
      {children}
    </ThemeProvider>
  );
};
