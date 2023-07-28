import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { Icons } from '~/constants';
import { StyledComponentsProvider } from '~/providers';

import { Icon } from './Icon';

const mockOnClick = vi.fn();

const MockIcon = ({ icon }: { icon: Icons }) => (
  <StyledComponentsProvider>
    <Icon dataTestID="atom-icon" icon={icon} onClick={mockOnClick} />
  </StyledComponentsProvider>
);

describe('Icon', () => {
  test('component snapshot', () => {
    const view = render(<MockIcon icon={Icons.HAMBURGER} />);
    expect(view).toMatchSnapshot();
  });

  test('ensure icon show correct kind of svg icon', () => {
    const { rerender } = render(
      <MockIcon icon={'SUPER_ICON' as unknown as Icons} />
    );
    expect(screen.queryByTestId('super-icon')).not.toBeInTheDocument();

    rerender(<MockIcon icon={Icons.ARROW} />);
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();

    rerender(<MockIcon icon={Icons.CHEVRON} />);
    expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();

    rerender(<MockIcon icon={Icons.CLOSE} />);
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();

    rerender(<MockIcon icon={Icons.DELETE} />);
    expect(screen.getByTestId('delete-icon')).toBeInTheDocument();

    rerender(<MockIcon icon={Icons.EDIT} />);
    expect(screen.getByTestId('edit-icon')).toBeInTheDocument();

    rerender(<MockIcon icon={Icons.HAMBURGER} />);
    expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
  });

  test('ensure icon can be clickable', () => {
    render(<MockIcon icon={Icons.CLOSE} />);
    fireEvent.click(screen.getByTestId('atom-icon'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
