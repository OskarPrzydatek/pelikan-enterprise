import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { List } from './List.page';

describe('Edit', () => {
  test('page snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <List title="List of Mocks" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
