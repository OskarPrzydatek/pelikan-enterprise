import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { DateFieldHelper } from './DateFieldHelper';

describe('TextField', () => {
  test('component snapshot', () => {
    const view = render(<DateFieldHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure date field label works correctly', () => {
    render(<DateFieldHelper />);
    const input: HTMLInputElement = screen.getByTestId('molecule-datefield');
    expect(
      screen.queryByTestId('molecule-datefield-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-datefield-label')).toBeInTheDocument();
    fireEvent.blur(input);
    expect(
      screen.queryByTestId('molecule-datefield-label')
    ).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: '2020-05-24' } });
    expect(screen.getByTestId('molecule-datefield-label')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(
      screen.queryByTestId('molecule-datefield-label')
    ).not.toBeInTheDocument();
  });

  test('ensure date cant be put by user via keyboard', () => {
    render(<DateFieldHelper />);
    const date: HTMLInputElement = screen.getByTestId('molecule-datefield');
    fireEvent.keyDown(date, { key: '1' });
    expect(date.value).toBe('');
  });

  test('ensure validation error message works correctly', () => {
    render(<DateFieldHelper isError />);
    expect(
      screen.getByTestId('molecule-datefield-error-message')
    ).toBeInTheDocument();
  });
});
