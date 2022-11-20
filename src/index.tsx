import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement =
  document.getElementById('root') ?? document.createElement('div'); // for testing purposes
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
