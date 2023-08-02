import styled, { css } from 'styled-components';

import { ICSS } from '~/models';

interface IButton extends ICSS {
  variant: 'primary' | 'secondary' | 'ghost';
}

export const Button = styled.button<IButton>`
  appearance: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.m};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          padding: ${({ theme }) => theme.spaces.s};
          background-color: ${({ theme }) => theme.colors.darkBlue};
          color: ${({ theme }) => theme.colors.white};
        `;
      case 'secondary':
        return css`
          padding: ${({ theme }) => theme.spaces.s};
          background-color: ${({ theme }) => theme.colors.lightBlue};
          color: ${({ theme }) => theme.colors.black};
        `;
      case 'ghost':
        return css`
          padding: 0;
          background: transparent;
          display: flex;
          font-size: ${({ theme }) => theme.fontSizes.m};
        `;
      default:
        return null;
    }
  }}

  ${({ css }) => css}
`;
