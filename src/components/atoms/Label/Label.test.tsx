import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Label } from './Label';

describe('Label', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Label dataTestID="label-atom" htmlFor="label-atom">
          Label
        </Label>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure label children renders correctly', () => {
    render(
      <StyledComponentsProvider>
        <Label dataTestID="label-atom" htmlFor="label-atom">
          Label
        </Label>
      </StyledComponentsProvider>
    );
    const label = screen.getByTestId('label-atom');
    expect(label).toHaveTextContent('Label');
  });
});
