import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyleLayout } from '../styles/layouts';
import { theme } from '../styles/theme';

interface IStyledComponentsProvider {
  children: React.ReactNode;
}

interface ITestingPageProvider {
  element: JSX.Element;
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

export const TestingPageProvider: React.FC<ITestingPageProvider> = ({
  element,
}: ITestingPageProvider) => {
  return (
    <StyledComponentsProvider>
      <MemoryRouter initialEntries={['/page1']}>
        <Routes>
          <Route element={element} path="/:page" />
        </Routes>
      </MemoryRouter>
    </StyledComponentsProvider>
  );
};
