import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Label } from './Label';

const MockLabel = () => (
  <StyledComponentsProvider>
    <Label dataTestID="label-atom" htmlFor="label-atom">
      Label
    </Label>
  </StyledComponentsProvider>
);

describe('Label', () => {
  test('component snapshot', () => {
    const view = render(<MockLabel />);
    expect(view).toMatchSnapshot();
  });

  test('ensure label children renders correctly', () => {
    render(<MockLabel />);
    const label = screen.getByTestId('label-atom');
    expect(label).toHaveTextContent('Label');
  });
});
