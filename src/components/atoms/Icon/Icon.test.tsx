import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { Icons } from '~/constants';
import { StyledComponentsProvider } from '~/providers';

import { Icon } from './Icon.component';

const mockOnClick = vi.fn();

describe('Icon', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Icon icon={Icons.HAMBURGER} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
  test('ensure icon show correct kind of svg icon', () => {
    const { rerender } = render(
      <StyledComponentsProvider>
        <Icon icon={'SUPER_ICON' as Icons} />
      </StyledComponentsProvider>
    );
    expect(screen.queryByTestId('super-icon')).not.toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={Icons.CHEVRON} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={Icons.CLOSE} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={Icons.HAMBURGER} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
  });
  test('ensure icon can be clickable', () => {
    render(
      <StyledComponentsProvider>
        <Icon dataTestID="atom-icon" icon={Icons.CLOSE} onClick={mockOnClick} />
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('atom-icon'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
