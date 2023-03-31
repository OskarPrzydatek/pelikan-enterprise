import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { HeaderBar } from './HeaderBar.component';

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
