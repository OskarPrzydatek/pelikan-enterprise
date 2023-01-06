import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Text } from './Text.component';

describe('Text', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Text dataTestID="text-atom">Text</Text>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure text children renders correctly', () => {
    render(
      <StyledComponentsProvider>
        <Text dataTestID="text-atom">Text</Text>
      </StyledComponentsProvider>
    );
    const text = screen.getByTestId('text-atom');
    expect(text).toHaveTextContent('Text');
  });
});
