import styled, { css } from 'styled-components';

export const SideMenu = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: 1fr 20fr 1fr;
  padding: ${({ theme }) => theme.spaces.m};

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav``;

export const List = styled.ul``;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;

  button {
    margin: ${({ theme }) => theme.spaces.xs} 0;
    margin-left: ${({ theme }) => theme.spaces.xl};
    font-weight: 700;
    cursor: pointer;
  }
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
