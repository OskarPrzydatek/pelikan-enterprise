import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { FormInputHooked } from '~/helpers';
import { StyledComponentsProvider } from '~/styles';

import { FormInput } from './FormInput.component';

describe('FormInput', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <FormInput label="Email" name="email" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(
      <StyledComponentsProvider>
        <FormInput
          inputTestID="molecule-form-input"
          label="Email"
          labelTestID="molecule-form-input-label"
          name="email"
        />
      </StyledComponentsProvider>
    );
    const input = screen.getByTestId('molecule-form-input');
    expect(
      screen.queryByTestId('molecule-form-input-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-form-input-label')).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<FormInputHooked isError />);
    expect(
      screen.getByTestId('molecule-form-input-error-message')
    ).toBeInTheDocument();
  });
});
