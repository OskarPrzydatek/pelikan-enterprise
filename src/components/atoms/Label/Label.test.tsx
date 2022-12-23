import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Label } from './Label.component';

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

  test('ensure label value renders correctly', () => {
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
