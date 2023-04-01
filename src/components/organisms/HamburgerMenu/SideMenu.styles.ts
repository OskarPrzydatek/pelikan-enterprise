import styled, { css } from 'styled-components';

export const SideMenu = styled.div`
  height: 100%;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: 1fr 20fr 1fr;
  padding: ${({ theme }) => theme.spaces.m};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  li {
    margin: ${({ theme }) => theme.spaces.l} 0;
  }
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;

  button {
    margin: ${({ theme }) => theme.spaces.xs} 0;
    margin-left: ${({ theme }) => theme.spaces.xl};
    font-weight: 700;
  }
`;

export const currentPageButtonCSS = css`
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const pageButtonCSS = css`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
