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
    expect(
      screen.queryByTestId('molecule-select-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(select);
    expect(screen.getByTestId('molecule-select-label')).toBeInTheDocument();
    fireEvent.blur(select);
    expect(
      screen.queryByTestId('molecule-select-label')
    ).not.toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'value1' } });
    expect(screen.getByTestId('molecule-select-label')).toBeInTheDocument();
    fireEvent.change(select, { target: { value: '' } });
    expect(
      screen.queryByTestId('molecule-select-label')
    ).not.toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<SelectHelper isError />);
    expect(
      screen.getByTestId('molecule-select-error-message')
    ).toBeInTheDocument();
  });
});
