import styled, { css } from 'styled-components';

export const OverviewListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 15fr 1fr;
  border-bottom: 3px solid;
  border-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.m};

  :hover {
    border-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0 ${({ theme }) => theme.spaces.xs};
`;

export const iconCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
