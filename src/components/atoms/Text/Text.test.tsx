import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Text } from './Text';

const MockText = () => (
  <StyledComponentsProvider>
    <Text dataTestID="text-atom">Text</Text>
  </StyledComponentsProvider>
);

describe('Text', () => {
  test('component snapshot', () => {
    const view = render(<MockText />);
    expect(view).toMatchSnapshot();
  });

  test('ensure text children renders correctly', () => {
    render(<MockText />);
    const text = screen.getByTestId('text-atom');
    expect(text).toHaveTextContent('Text');
  });
});
