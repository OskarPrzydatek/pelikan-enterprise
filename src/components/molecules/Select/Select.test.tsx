import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SelectHelper } from './Select.helper';

describe('Select', () => {
  test('component snapshot', () => {
    const view = render(<SelectHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure select focus and blur works correctly', () => {
    render(<SelectHelper />);
    const select = screen.getByTestId('molecule-select');
    expect(
      screen.queryByTestId('molecule-select-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(select);
    expect(screen.getByTestId('molecule-select-label')).toBeInTheDocument();
    expect(
      screen.getByTestId('molecule-select-options-list')
    ).toBeInTheDocument();
    fireEvent.blur(select);
    expect(
      screen.queryByTestId('molecule-select-label')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('molecule-select-options-list')
    ).not.toBeInTheDocument();
  });

  test('ensure click on options list selecting value', () => {
    render(<SelectHelper />);
    const select: HTMLInputElement = screen.getByTestId('molecule-select');
    fireEvent.focus(select);
    fireEvent.click(
      screen.getByTestId('molecule-select-option-list-item-label1')
    );
    expect(select.value).toEqual('label1');
  });

  test('ensure blur prevent for item selecting', () => {
    render(<SelectHelper />);
    const select = screen.getByTestId('molecule-select');
    fireEvent.focus(select);
    const optionsList = screen.getByTestId('molecule-select-options-list');
    const preventDefaultSpy = vi.spyOn(Event.prototype, 'preventDefault');
    fireEvent.mouseDown(optionsList);
    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    preventDefaultSpy.mockRestore();
  });

  test('ensure validation error message works correctly', () => {
    render(<SelectHelper isError />);
    expect(
      screen.getByTestId('molecule-select-error-message')
    ).toBeInTheDocument();
  });
});
