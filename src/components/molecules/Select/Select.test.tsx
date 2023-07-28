import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SelectHelper } from './SelectHelper';

describe('Select', () => {
  test('component snapshot', () => {
    const view = render(<SelectHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure select focus and blur works correctly', () => {
    render(<SelectHelper />);
    const select: HTMLSelectElement = screen.getByTestId('molecule-select');
    const getSelectLabel = () => screen.getByTestId('molecule-select-label');
    const queryForSelectLabel = () =>
      screen.queryByTestId('molecule-select-label');
    expect(queryForSelectLabel()).not.toBeInTheDocument();
    fireEvent.focus(select);
    expect(getSelectLabel()).toBeInTheDocument();
    fireEvent.blur(select);
    expect(queryForSelectLabel()).not.toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'value1' } });
    expect(screen.getByTestId('molecule-select-label')).toBeInTheDocument();
    fireEvent.change(select, { target: { value: '' } });
    expect(queryForSelectLabel()).not.toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<SelectHelper isError />);
    expect(
      screen.getByTestId('molecule-select-error-message')
    ).toBeInTheDocument();
  });
});
