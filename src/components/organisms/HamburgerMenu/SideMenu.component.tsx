import React from 'react';

import { Background, Button, Header, Icon, Text } from '~/components/atoms';
import { Icons, Slugs } from '~/constants';
import { sideMenuNavigationItemsMetadata } from '~/metadata';
import { IComponent, ISideMenuNavigationList } from '~/models';

import * as S from './SideMenu.styles';

interface ISideMenuNavigationItem extends ISideMenuNavigationList {
  isCurrentPage: (path: Slugs) => boolean;
  onNavigate: (path: Slugs) => void;
}

interface ISideMenu extends IComponent {
  onClickCloseSideMenu: () => void;
  isCurrentPage: (path: Slugs) => boolean;
  onNavigate: (path: Slugs) => void;
  onClickLogout: () => void;
}

const SideMenuNavigationItem: React.FC<ISideMenuNavigationItem> = ({
  title,
  items,
  isCurrentPage,
  onNavigate,
}: ISideMenuNavigationItem) => {
  const handleIsCurrentPageStyle = (path: Slugs) =>
    isCurrentPage(path) ? S.currentPageButtonCSS : S.pageButtonCSS;

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

export const SideMenu: React.FC<ISideMenu> = ({
  onClickCloseSideMenu,
  isCurrentPage,
  onNavigate,
  onClickLogout,
}: ISideMenu) => {
  return (
    <Background onClickBackground={onClickCloseSideMenu}>
      <S.SideMenu data-testid="hamburger-manu-side-menu">
        <S.Header>
          <Header>Pelikan Business</Header>
          <Icon
            dataTestID="side-menu-close-icon"
            icon={Icons.CLOSE}
            width={15}
            onClick={onClickCloseSideMenu}
          />
        </S.Header>
        <S.Nav>
          <S.List>
            {sideMenuNavigationItemsMetadata.map(({ title, items }) => (
              <SideMenuNavigationItem
                key={title}
                isCurrentPage={isCurrentPage}
                items={items}
                title={title}
                onNavigate={onNavigate}
              />
            ))}
          </S.List>
        </S.Nav>
        <Button dataTestID="side-menu-logout-button" onClick={onClickLogout}>
          <Text css={S.logoutButtonCSS}>Wyloguj</Text>
        </Button>
      </S.SideMenu>
    </Background>
  );
};
