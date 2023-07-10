import { ThemeProvider } from 'styled-components';

import { GlobalStyleLayout } from '../styles/layouts';
import { theme } from '../styles/theme';

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
