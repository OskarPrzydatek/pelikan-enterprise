import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon, IconEnum } from '~/components/atoms';
import { Slugs } from '~/constants';

import { SideMenu } from './SideMenu.component';

export const HamburgerMenu: React.FC = () => {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLogout = () => {};

  return (
    <>
      <Icon
        dataTestID="side-menu-hamburger-icon"
        height={15}
        icon={IconEnum.HAMBURGER}
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
