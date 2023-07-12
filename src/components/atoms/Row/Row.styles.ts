import styled from 'styled-components';

import { ICSS } from '~/models';

export const Row = styled.div<ICSS>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.l};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spaces.xl};
  }
`;
