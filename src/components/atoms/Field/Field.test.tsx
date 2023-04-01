import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { StyledComponentsProvider, theme } from '~/styles';

import { Field } from './Field.component';

const mockOnChange = vi.fn();
const mockOnFocus = vi.fn();
const mockOnBlur = vi.fn();

describe('Field', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Field
          dataTestID="atom-field"
          id="atom-field"
          placeholder="Field atom component"
          onBlur={mockOnBlur}
          onChange={mockOnChange}
          onFocus={mockOnFocus}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure field is wtitable', () => {
    render(
      <StyledComponentsProvider>
        <Field
          dataTestID="atom-field"
          id="atom-field"
          placeholder="field Atom Component"
          onChange={mockOnChange}
        />
      </StyledComponentsProvider>
    );
    const field: HTMLInputElement = screen.getByTestId('atom-field');
    fireEvent.change(field, { target: { value: 'abcd' } });
    expect(field.value).toBe('abcd');
    expect(mockOnChange).toHaveBeenCalled();
  });

  test('ensure field focus and blur works correctly', () => {
    render(
      <StyledComponentsProvider>
        <Field
          dataTestID="atom-field"
          id="atom-field"
          placeholder="field Atom Component"
          onBlur={mockOnBlur}
          onFocus={mockOnFocus}
        />
      </StyledComponentsProvider>
    );
    const field: HTMLInputElement = screen.getByTestId('atom-field');
    expect(field).toHaveStyle(`border: 3px solid ${theme.colors.darkBlue}`);
    field.focus();
    expect(field).toHaveStyle(`border: 3px solid ${theme.colors.lightBlue}`);
    expect(mockOnFocus).toHaveBeenCalled();
    field.blur();
    expect(field).toHaveStyle(`border: 3px solid ${theme.colors.darkBlue}`);
    expect(mockOnBlur).toHaveBeenCalled();
  });
});
