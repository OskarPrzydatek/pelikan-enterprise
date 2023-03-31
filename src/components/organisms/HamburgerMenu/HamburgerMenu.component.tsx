import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Icon, IconEnum } from '~/components/atoms';
import { Paths } from '~/router';

import { SideMenu } from './SideMenu.component';

export const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();

  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState<boolean>(false);

  const currentPageButtonStyle = (path: Paths) => ({
    color:
      pathname === `/${path}` ? theme.colors.lightBlue : theme.colors.black,
  });

  const onClickOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const onClickCloseSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const onNavigate = (path: Paths) => {
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
          currentPageButtonStyle={currentPageButtonStyle}
          onClickCloseSideMenu={onClickCloseSideMenu}
          onClickLogout={onClickLogout}
          onNavigate={onNavigate}
        />
      )}
    </>
  );
};
