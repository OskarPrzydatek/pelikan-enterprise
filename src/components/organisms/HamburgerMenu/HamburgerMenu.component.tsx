import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '~/components/atoms';
import { Icons, Slugs } from '~/constants';
import { IComponent } from '~/models';

import { SideMenu } from './SideMenu.component';

interface IHamburgerMenu extends IComponent {}

export const HamburgerMenu: React.FC<IHamburgerMenu> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState<boolean>(false);

  const isCurrentPage = (path: Slugs) => pathname === `/${path}`;

  const onClickOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const onClickCloseSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const onNavigate = (path: Slugs) => {
    onClickCloseSideMenu();
    navigate(path);
  };

  // TODO: Implement when auth be ready on BE
  const onClickLogout = () => {};

  return (
    <>
      <Icon
        dataTestID="side-menu-hamburger-icon"
        height={15}
        icon={Icons.HAMBURGER}
        width={30}
        onClick={onClickOpenSideMenu}
      />
      {isSideMenuOpen && (
        <SideMenu
          isCurrentPage={isCurrentPage}
          onClickCloseSideMenu={onClickCloseSideMenu}
          onClickLogout={onClickLogout}
          onNavigate={onNavigate}
        />
      )}
    </>
  );
};
