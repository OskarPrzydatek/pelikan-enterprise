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
    expect(
      screen.queryByTestId('molecule-textfield-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-textfield-label')).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextFieldHelper isError />);
    expect(
      screen.getByTestId('molecule-textfield-error-message')
    ).toBeInTheDocument();
  });
});
