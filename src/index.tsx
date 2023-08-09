import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { StyledComponentsProvider } from './providers';
import { router } from './router';

import 'react-toastify/dist/ReactToastify.css';

const rootElement =
  document.getElementById('root') ?? document.createElement('div'); // for testing purposes
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <StrictMode>
    <StyledComponentsProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </StyledComponentsProvider>
  </StrictMode>
);
