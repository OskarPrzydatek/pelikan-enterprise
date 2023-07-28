import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HamburgerMenu } from './HamburgerMenu';

const MockHamburgerMenu = () => (
  <BrowserRouter>
    <StyledComponentsProvider>
      <HamburgerMenu />
    </StyledComponentsProvider>
  </BrowserRouter>
);

describe('Button', () => {
  test('component snapshot', () => {
    const view = render(<MockHamburgerMenu />);
    expect(view).toMatchSnapshot();
  });

  test('ensure side menu opening and closing correctly', () => {
    render(<MockHamburgerMenu />);
    fireEvent.click(screen.getByTestId('side-menu-hamburger-icon'));
    expect(screen.getByTestId('hamburger-menu-side-menu')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('side-menu-close-icon'));
    expect(
      screen.queryByTestId('hamburger-menu-side-menu')
    ).not.toBeInTheDocument();
  });

  test('ensure side menu navigate to correct page', () => {
    render(<MockHamburgerMenu />);
    fireEvent.click(screen.getByTestId('side-menu-hamburger-icon'));
    fireEvent.click(screen.getByTestId('side-menu-item-offer-overview'));
    expect(
      screen.queryByTestId('hamburger-menu-side-menu')
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('side-menu-hamburger-icon'));
    expect(screen.getByTestId('side-menu-item-offer-overview')).toHaveStyle(
      'color: ButtonText'
    );
  });
});
