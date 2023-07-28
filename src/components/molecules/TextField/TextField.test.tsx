import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TextFieldHelper } from './TextFieldHelper';

describe('TextField', () => {
  test('component snapshot', () => {
    const view = render(<TextFieldHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(<TextFieldHelper />);
    const input = screen.getByTestId('molecule-textfield');
    const getInputLabel = () => screen.getByTestId('molecule-textfield-label');
    const queryForInputLabel = () =>
      screen.queryByTestId('molecule-textfield-label');
    expect(queryForInputLabel()).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(getInputLabel()).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'q' } });
    expect(getInputLabel()).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextFieldHelper isError />);
    expect(
      screen.getByTestId('molecule-textfield-error-message')
    ).toBeInTheDocument();
  });
});
