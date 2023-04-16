import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Icon } from './Icon.component';
import { IconEnum } from './Icon.enum';

const mockOnClick = vi.fn();

describe('Icon', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Icon icon={IconEnum.HAMBURGER} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  // TODO: if more icons - thing about func to test icon for this test
  test('ensure icon show correct kind of svg icon', () => {
    const { rerender } = render(
      <StyledComponentsProvider>
        <Icon icon={'SUPER_ICON' as IconEnum} />
      </StyledComponentsProvider>
    );
    expect(screen.queryByTestId('super-icon')).not.toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={IconEnum.CHEVRON} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={IconEnum.CLOSE} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    rerender(
      <StyledComponentsProvider>
        <Icon icon={IconEnum.HAMBURGER} />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
  });

  test('ensure icon can be clickable', () => {
    render(
      <StyledComponentsProvider>
        <Icon
          dataTestID="atom-icon"
          icon={IconEnum.CLOSE}
          onClick={mockOnClick}
        />
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('atom-icon'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
