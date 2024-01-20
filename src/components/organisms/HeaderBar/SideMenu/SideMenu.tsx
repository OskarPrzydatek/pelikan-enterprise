import React from 'react';

import { Background, Button, Header, Icon, Text } from '~/components/atoms';
import { Icons, Slugs } from '~/constants';
import { IComponent } from '~/models';
import { ILoggedUser } from '~/models/data';

import * as S from './SideMenu.styles';

interface ISideMenuItem {
  slug: Slugs;
  label: string;
  handleIsCurrentPage: (path: Slugs) => boolean;
  onNavigate: (path: Slugs) => void;
}

const SideMenuItem: React.FC<ISideMenuItem> = ({
  slug,
  label,
  handleIsCurrentPage,
  onNavigate,
}: ISideMenuItem) => {
  const handleNavigate = () => onNavigate(slug);
  const handleCurrentPageCSS = (slug: Slugs) =>
    handleIsCurrentPage(slug) ? S.currentPageButtonCSS : S.pageButtonCSS;

  return (
    <S.NavItem>
      <Button
        dataTestID={`side-menu-item-${slug}`}
        variant="ghost"
        onClick={handleNavigate}
      >
        <Header css={handleCurrentPageCSS(slug)}>{label}</Header>
      </Button>
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
  const loggedUser = JSON.parse(
    localStorage.getItem('loggedUser')!
  ) as ILoggedUser;

  return (
    <Background onClickBackground={onClickCloseSideMenu}>
      <S.SideMenu data-testid="hamburger-menu-side-menu">
        <S.HeaderBar>
          <Text css={S.appNameLabelCSS}>Pelikan Enterprise</Text>
          <Icon
            dataTestID="side-menu-close-icon"
            icon={Icons.CLOSE}
            width={15}
            onClick={onClickCloseSideMenu}
          />
        </S.HeaderBar>
        <S.Nav>
          <S.List>
            <SideMenuItem
              handleIsCurrentPage={handleIsCurrentPage}
              label="Oferty"
              slug={Slugs.OFFER_OVERVIEW}
              onNavigate={onNavigate}
            />
            <SideMenuItem
              handleIsCurrentPage={handleIsCurrentPage}
              label="Hotele"
              slug={Slugs.HOTEL_OVERVIEW}
              onNavigate={onNavigate}
            />
            <SideMenuItem
              handleIsCurrentPage={handleIsCurrentPage}
              label="Transport"
              slug={Slugs.TRANSPORT_OVERVIEW}
              onNavigate={onNavigate}
            />
            <SideMenuItem
              handleIsCurrentPage={handleIsCurrentPage}
              label="Atrakcje"
              slug={Slugs.ATTRACTION_OVERVIEW}
              onNavigate={onNavigate}
            />
            <SideMenuItem
              handleIsCurrentPage={handleIsCurrentPage}
              label="Hashtagi"
              slug={Slugs.HASHTAG_OVERVIEW}
              onNavigate={onNavigate}
            />
            {loggedUser.userType === 'ADMIN' ? (
              <SideMenuItem
                handleIsCurrentPage={handleIsCurrentPage}
                label="Użytkownicy"
                slug={Slugs.USERS_OVERVIEW}
                onNavigate={onNavigate}
              />
            ) : null}
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
