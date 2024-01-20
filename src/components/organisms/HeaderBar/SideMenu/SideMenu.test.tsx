import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { SideMenu } from './SideMenu';

const mockHandleIsCurrentPage = vi.fn();
const mockOnClickCloseSideMenu = vi.fn();
const mockOnClickLogout = vi.fn();
const mockOnNavigate = vi.fn();

const MockSideMenu = () => (
  <StyledComponentsProvider>
    <SideMenu
      handleIsCurrentPage={mockHandleIsCurrentPage}
      onClickCloseSideMenu={mockOnClickCloseSideMenu}
      onClickLogout={mockOnClickLogout}
      onNavigate={mockOnNavigate}
    />
  </StyledComponentsProvider>
);

const loggedUserMock = {
  firstName: 'fname',
  lastName: 'lname',
  userType: 'WORKER',
};

beforeEach(() => {
  localStorage.setItem('loggedUser', JSON.stringify(loggedUserMock));
});

describe('SideMenu', () => {
  test('component snapshot', () => {
    const view = render(<MockSideMenu />);
    expect(view).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(<MockSideMenu />);
    fireEvent.click(screen.getByTestId('side-menu-item-offer-overview'));
    expect(mockOnNavigate).toHaveBeenCalledWith('offer-overview');
  });

  test('ensure logout works correctly', () => {
    render(<MockSideMenu />);
    fireEvent.click(screen.getByTestId('side-menu-logout-button'));
    expect(mockOnClickLogout).toHaveBeenCalled();
  });
});
