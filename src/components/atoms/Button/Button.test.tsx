import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Button } from './Button.component';

const mockOnClick = vi.fn();

describe('Button', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Button onClick={mockOnClick}>Logout</Button>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure button is clickable', () => {
    render(
      <StyledComponentsProvider>
        <Button dataTestID="atom-button" onClick={mockOnClick}>
          Logout
        </Button>
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('atom-button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
