import React from 'react';

import { Background, Button, Header, Icon, IconEnum } from '~/components/atoms';
import {
  ISideMenuNavigationSection,
  sideMenuNavigationItemsMetadata,
} from '~/metadata';
import { Paths } from '~/router';

import * as S from './SideMenu.styles';

interface ISideMenuNavigationItem extends ISideMenuNavigationSection {
  isCurrentPage: (path: Paths) => boolean;
  onNavigate: (path: Paths) => void;
}

interface ISideMenu {
  onClickCloseSideMenu: () => void;
  isCurrentPage: (path: Paths) => boolean;
  onNavigate: (path: Paths) => void;
  onClickLogout: () => void;
}

const SideMenuNavigationItem: React.FC<ISideMenuNavigationItem> = ({
  title,
  items,
  isCurrentPage,
  onNavigate,
}: ISideMenuNavigationItem) => {
  return (
    <S.NavItem>
      <Header>{title}</Header>
      {items.map(({ path, label }) => {
        const handleIsCurrentPageCSS = isCurrentPage(path)
          ? S.currentPageButtonCSS
          : S.pageButtonCSS;

        return (
          <Button
            key={path}
            css={handleIsCurrentPageCSS}
            dataTestID={`side-menu-item-${path}`}
            variant="ghost"
            onClick={() => onNavigate(path)}
          >
            {label}
          </Button>
        );
      })}
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
            icon={IconEnum.CLOSE}
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
        <Button onClick={onClickLogout}>Wyloguj</Button>
      </S.SideMenu>
    </Background>
  );
};
