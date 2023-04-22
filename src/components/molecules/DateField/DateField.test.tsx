import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { DateFieldHelper } from './DateField.helper';

describe('TextField', () => {
  test('component snapshot', () => {
    const view = render(<DateFieldHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(<DateFieldHelper />);
    const input = screen.getByTestId('molecule-datefield');
    expect(
      screen.queryByTestId('molecule-datefield-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-datefield-label')).toBeInTheDocument();
    fireEvent.blur(input);
    expect(
      screen.queryByTestId('molecule-datefield-label')
    ).not.toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<DateFieldHelper isError />);
    expect(
      screen.getByTestId('molecule-datefield-error-message')
    ).toBeInTheDocument();
  });
});
