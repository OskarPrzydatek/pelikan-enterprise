import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export const Text = styled.p<{
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.s};

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
`;
