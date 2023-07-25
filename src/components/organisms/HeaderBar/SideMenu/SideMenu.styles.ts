import styled, { css } from 'styled-components';

export const SideMenu = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: 1fr 10fr 0.5fr;
  padding: ${({ theme }) => theme.spaces.s};

  @media ${({ theme }) => theme.breakpoints.phone} {
    width: 55%;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 30%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 20%;
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const List = styled.ul``;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;

  button {
    margin-left: ${({ theme }) => theme.spaces.xl};
    font-weight: 700;
    cursor: pointer;
  }
`;

export const appNameLabelCSS = css`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 900;
`;

export const currentPageButtonCSS = css`
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const pageButtonCSS = css`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const logoutButtonCSS = css`
  color: ${({ theme }) => theme.colors.white};
`;
