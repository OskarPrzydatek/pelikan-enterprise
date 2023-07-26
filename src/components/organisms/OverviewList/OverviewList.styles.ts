import styled, { css } from 'styled-components';

export const OverviewList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OverviewListWrapper = styled.ul`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.div`
  margin: ${({ theme }) => theme.spaces.l} 0;
`;

export const navigateButtonCSS = css`
  width: 80%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 20%;
  }
`;
