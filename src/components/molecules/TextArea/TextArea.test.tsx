import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TextAreaHelper } from './TextAreaHelper';

describe('TextArea', () => {
  test('component snapshot', () => {
    const view = render(<TextAreaHelper />);
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(<TextAreaHelper />);
    const textarea: HTMLTextAreaElement =
      screen.getByTestId('molecule-textarea');
    expect(
      screen.queryByTestId('molecule-textarea-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(textarea);
    expect(screen.getByTestId('molecule-textarea-label')).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'q' } });
    expect(screen.getByTestId('molecule-textarea-label')).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextAreaHelper isError />);
    expect(
      screen.getByTestId('molecule-textarea-error-message')
    ).toBeInTheDocument();
  });
});
