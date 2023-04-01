import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

export const Button = styled.button<{
  variant: 'primary' | 'secondary' | 'ghost';
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  appearance: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.main};

  ${({ css }) => css}

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
