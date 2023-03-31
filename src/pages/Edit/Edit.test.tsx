import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Edit } from './Edit.page';

describe('Edit', () => {
  test('page snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Edit title="Edit Mock" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
