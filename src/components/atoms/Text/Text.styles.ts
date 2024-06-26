import styled from 'styled-components';

import { ICSS } from '~/models';

export const Text = styled.p<ICSS>`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  ${({ css }) => css}
`;
