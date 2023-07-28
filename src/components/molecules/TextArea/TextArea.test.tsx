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
    const getTextAreaLabel = () =>
      screen.getByTestId('molecule-textarea-label');
    const queryForTextAreaLabel = () =>
      screen.queryByTestId('molecule-textarea-label');
    expect(queryForTextAreaLabel()).not.toBeInTheDocument();
    fireEvent.focus(textarea);
    expect(getTextAreaLabel()).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'q' } });
    expect(getTextAreaLabel()).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextAreaHelper isError />);
    expect(
      screen.getByTestId('molecule-textarea-error-message')
    ).toBeInTheDocument();
  });
});
