import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TextAreaHooked } from '~/helpers';
import { StyledComponentsProvider } from '~/styles';

import { TextArea } from './TextArea.component';

describe('TextArea', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <TextArea label="Description" name="description" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure input focusing works correctly', () => {
    render(
      <StyledComponentsProvider>
        <TextArea
          label="Email"
          labelTestID="molecule-textarea-label"
          name="email"
          textareaTestID="molecule-textarea"
        />
      </StyledComponentsProvider>
    );
    const input = screen.getByTestId('molecule-textarea');
    expect(
      screen.queryByTestId('molecule-textarea-label')
    ).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByTestId('molecule-textarea-label')).toBeInTheDocument();
  });

  test('ensure validation error message works correctly', () => {
    render(<TextAreaHooked isError />);
    expect(
      screen.getByTestId('molecule-textarea-error-message')
    ).toBeInTheDocument();
  });
});
