import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Button } from './Button';

const mockOnClick = vi.fn();

const MockButton = () => (
  <StyledComponentsProvider>
    <Button dataTestID="atom-button" onClick={mockOnClick}>
      Logout
    </Button>
  </StyledComponentsProvider>
);

describe('Button', () => {
  test('component snapshot', () => {
    const view = render(<MockButton />);
    expect(view).toMatchSnapshot();
  });

  test('ensure button is clickable', () => {
    render(<MockButton />);
    fireEvent.click(screen.getByTestId('atom-button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
