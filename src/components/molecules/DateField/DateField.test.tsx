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
    const date: HTMLInputElement = screen.getByTestId('molecule-datefield');
    const getDateLabel = () => screen.getByTestId('molecule-datefield-label');
    const queryForDateLabel = () =>
      screen.queryByTestId('molecule-datefield-label');
    expect(queryForDateLabel()).not.toBeInTheDocument();
    fireEvent.focus(date);
    expect(getDateLabel()).toBeInTheDocument();
    fireEvent.blur(date);
    expect(queryForDateLabel()).not.toBeInTheDocument();
    fireEvent.change(date, { target: { value: '2020-05-24' } });
    expect(getDateLabel()).toBeInTheDocument();
    fireEvent.change(date, { target: { value: '' } });
    expect(queryForDateLabel()).not.toBeInTheDocument();
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
