import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.shadowBlack};
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.l};
  }
`;
