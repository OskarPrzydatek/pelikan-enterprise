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

  li {
    margin-bottom: ${({ theme }) => theme.spaces.m};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 80%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spaces.l};
  margin-bottom: ${({ theme }) => theme.spaces.xl};
  gap: ${({ theme }) => theme.spaces.xxl};

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const prevArrowCSS = css`
  display: flex;
  align-items: center;
`;

export const nextArrowCSS = css`
  display: flex;
  align-items: center;
  transform: rotate(180deg);
`;

export const navigateButtonCSS = css`
  width: 80%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 20%;
  }
`;
