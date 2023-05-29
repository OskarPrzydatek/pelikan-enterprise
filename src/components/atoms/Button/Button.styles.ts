import styled, { css } from 'styled-components';

import { ICSS } from '~/models';

interface IButton extends ICSS {
  variant: 'primary' | 'secondary' | 'ghost';
}

export const Button = styled.button<IButton>`
  appearance: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.main};
  cursor: pointer;

  ${({ css }) => css}

  @media ${({ theme }) => theme.breakpoints.phone} {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          width: '100%';
          padding: ${({ theme }) => theme.spaces.xs};
          background-color: ${({ theme }) => theme.colors.darkBlue};
          color: ${({ theme }) => theme.colors.white};
          font-size: ${({ theme }) => theme.fontSizes.m};
        `;
      case 'secondary':
        return css``;
      case 'ghost':
        return css`
          background: transparent;
          padding: 0;
          display: flex;
          font-size: ${({ theme }) => theme.fontSizes.m};
        `;
      default:
        return null;
    }
  }}
`;
