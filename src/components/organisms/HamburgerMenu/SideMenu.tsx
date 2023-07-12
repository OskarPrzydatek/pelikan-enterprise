import React from 'react';

import { Background, Button, Header, Icon } from '~/components/atoms';
import { Icons, Slugs } from '~/constants';
import { sideMenuNavigationItemsMetadata } from '~/metadata';
import { IComponent, ISideMenuNavigationList } from '~/models';

import * as S from './SideMenu.styles';

interface ISideMenuNavigationItem extends ISideMenuNavigationList {
  handleIsCurrentPage: (path: Slugs) => boolean;
  onNavigate: (path: Slugs) => void;
}

const SideMenuNavigationItem: React.FC<ISideMenuNavigationItem> = ({
  title,
  items,
  handleIsCurrentPage,
  onNavigate,
}: ISideMenuNavigationItem) => {
  const handleIsCurrentPageStyle = (path: Slugs) =>
    handleIsCurrentPage(path) ? S.currentPageButtonCSS : S.pageButtonCSS;

  return (
    <S.NavItem>
      <Header>{title}</Header>
      {items.map(({ path, label }) => (
        <Button
          key={path}
          css={handleIsCurrentPageStyle(path)}
          dataTestID={`side-menu-item-${path}`}
          variant="ghost"
          onClick={() => onNavigate(path)}
        >
          {label}
        </Button>
      ))}
    </S.NavItem>
  );
};

interface ISideMenu extends IComponent {
  onClickCloseSideMenu: () => void;
  handleIsCurrentPage: (path: Slugs) => boolean;
  onNavigate: (path: Slugs) => void;
  onClickLogout: () => void;
}

export const SideMenu: React.FC<ISideMenu> = ({
  onClickCloseSideMenu,
  handleIsCurrentPage,
  onNavigate,
  onClickLogout,
}: ISideMenu) => {
  return (
    <Background onClickBackground={onClickCloseSideMenu}>
      <S.SideMenu data-testid="hamburger-menu-side-menu">
        <S.HeaderBar>
          <Header>Pelikan Enterprise</Header>
          <Icon
            dataTestID="side-menu-close-icon"
            icon={Icons.CLOSE}
            width={15}
            onClick={onClickCloseSideMenu}
          />
        </S.HeaderBar>
        <S.Nav>
          <S.List>
            {sideMenuNavigationItemsMetadata.map(({ title, items }) => (
              <SideMenuNavigationItem
                key={title}
                handleIsCurrentPage={handleIsCurrentPage}
                items={items}
                title={title}
                onNavigate={onNavigate}
              />
            ))}
          </S.List>
        </S.Nav>
        <Button
          css={S.logoutButtonCSS}
          dataTestID="side-menu-logout-button"
          onClick={onClickLogout}
        >
          Wyloguj
        </Button>
      </S.SideMenu>
    </Background>
  );
};
