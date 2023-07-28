import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HeaderBar } from './HeaderBar';

const MockHeaderBar = () => (
  <BrowserRouter>
    <StyledComponentsProvider>
      <HeaderBar />
    </StyledComponentsProvider>
  </BrowserRouter>
);

describe('HeaderBar', () => {
  test('component snapshot', () => {
    const view = render(<MockHeaderBar />);
    expect(view).toMatchSnapshot();
  });
});
