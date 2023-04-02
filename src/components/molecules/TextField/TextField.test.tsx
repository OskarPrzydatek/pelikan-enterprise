import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TextFieldHooked } from '~/helpers';
import { StyledComponentsProvider } from '~/styles';

import { TextField } from './TextField.component';

describe('TextField', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <TextField label="Email" name="email" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(
      <StyledComponentsProvider>
        <TextField
          inputTestID="molecule-textfield"
          label="Email"
          labelTestID="molecule-textfield-label"
          name="email"
        />
      </StyledComponentsProvider>
    );
    const input = screen.getByTestId('molecule-textfield');
    expect(
      screen.queryByTestId('molecule-textfield-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-textfield-label')).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextFieldHooked isError />);
    expect(
      screen.getByTestId('molecule-textfield-error-message')
    ).toBeInTheDocument();
  });
});
