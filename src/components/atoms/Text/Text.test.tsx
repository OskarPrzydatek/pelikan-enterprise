import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Text } from './Text.component';

describe('Text', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Text dataTestID="text-atom">Example Text</Text>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
