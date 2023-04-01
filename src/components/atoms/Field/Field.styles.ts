import styled from 'styled-components';

import { ICSS } from '~/styles';

export const Field = styled.input<ICSS>`
  appearance: none;
  border: none;
  width: 100%;
  line-height: 1.6;
  padding: 0.5%;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${({ css }) => css}

  @media ${({ theme }) => theme.breakpoints.phone} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;
