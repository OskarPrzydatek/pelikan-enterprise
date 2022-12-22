import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { StyledComponentsProvider, theme } from '~/styles';

import { Input } from './Input.component';

const mockOnChange = vi.fn();
const mockOnFocus = vi.fn();
const mockOnBlur = vi.fn();

describe('Input', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Input
          dataTestID="atom-input"
          id="atom-input"
          placeholder="Input atom component"
          onBlur={mockOnBlur}
          onChange={mockOnChange}
          onFocus={mockOnFocus}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure input is wtitable', () => {
    render(
      <StyledComponentsProvider>
        <Input
          dataTestID="atom-input"
          id="atom-input"
          placeholder="Input Atom Component"
          onChange={mockOnChange}
        />
      </StyledComponentsProvider>
    );
    const input: HTMLInputElement = screen.getByTestId('atom-input');
    fireEvent.change(input, { target: { value: 'abcd' } });
    expect(input.value).toBe('abcd');
    expect(mockOnChange).toHaveBeenCalled();
  });

  test('ensure input focus and blur works correctly', () => {
    render(
      <StyledComponentsProvider>
        <Input
          dataTestID="atom-input"
          id="atom-input"
          placeholder="Input Atom Component"
          onBlur={mockOnBlur}
          onFocus={mockOnFocus}
        />
      </StyledComponentsProvider>
    );
    const input: HTMLInputElement = screen.getByTestId('atom-input');
    expect(input).toHaveStyle(`border: 3px solid ${theme.colors.darkBlue}`);
    input.focus();
    expect(input).toHaveStyle(`border: 3px solid ${theme.colors.lightBlue}`);
    expect(mockOnFocus).toHaveBeenCalled();
    input.blur();
    expect(input).toHaveStyle(`border: 3px solid ${theme.colors.darkBlue}`);
    expect(mockOnBlur).toHaveBeenCalled();
  });
});
