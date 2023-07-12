import styled from 'styled-components';

import { ICSS } from '~/models';

export const Header = styled.h2<ICSS>`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin: ${({ theme }) => theme.spaces.xs} 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin: ${({ theme }) => theme.spaces.s} 0;
  }

  ${({ css }) => css}
`;
