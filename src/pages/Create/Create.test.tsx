import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Create } from './Create.page';

describe('Crate', () => {
  test('page snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Create title="Create Mock" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
