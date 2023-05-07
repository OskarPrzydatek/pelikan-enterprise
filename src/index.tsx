import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { StyledComponentsProvider } from './styles';

const rootElement =
  document.getElementById('root') ?? document.createElement('div'); // for testing purposes
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <StrictMode>
    <StyledComponentsProvider>
      <RouterProvider router={router} />
    </StyledComponentsProvider>
  </StrictMode>
);
