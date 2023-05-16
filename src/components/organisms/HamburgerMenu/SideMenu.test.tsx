import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { SideMenu } from './SideMenu.component';

const mockHandleIsCurrentPage = vi.fn();
const mockOnClickCloseSideMenu = vi.fn();
const mockOnClickLogout = vi.fn();
const mockOnNavigate = vi.fn();

describe('SideMenu', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <SideMenu
          handleIsCurrentPage={mockHandleIsCurrentPage}
          onClickCloseSideMenu={mockOnClickCloseSideMenu}
          onClickLogout={mockOnClickLogout}
          onNavigate={mockOnNavigate}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(
      <StyledComponentsProvider>
        <SideMenu
          handleIsCurrentPage={mockHandleIsCurrentPage}
          onClickCloseSideMenu={mockOnClickCloseSideMenu}
          onClickLogout={mockOnClickLogout}
          onNavigate={mockOnNavigate}
        />
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('side-menu-item-create-offer'));
    expect(mockOnNavigate).toHaveBeenCalledWith('create-offer');
  });

  test('ensure logout works correctly', () => {
    render(
      <StyledComponentsProvider>
        <SideMenu
          handleIsCurrentPage={mockHandleIsCurrentPage}
          onClickCloseSideMenu={mockOnClickCloseSideMenu}
          onClickLogout={mockOnClickLogout}
          onNavigate={mockOnNavigate}
        />
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('side-menu-logout-button'));
    expect(mockOnClickLogout).toHaveBeenCalled();
  });
});
