import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HeaderBar } from './HeaderBar';

describe('HeaderBar', () => {
  test('component snapshot', () => {
    const view = render(
      <BrowserRouter>
        <StyledComponentsProvider>
          <HeaderBar />
        </StyledComponentsProvider>
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
