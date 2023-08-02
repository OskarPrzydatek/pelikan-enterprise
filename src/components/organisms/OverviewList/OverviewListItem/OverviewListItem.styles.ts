import styled, { css } from 'styled-components';

export const OverviewListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 15fr 1fr;
  border-bottom: 3px solid;
  cursor: pointer;
  border-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.m};

  :hover {
    border-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 ${({ theme }) => theme.spaces.xs};
`;

export const iconCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
