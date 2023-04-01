import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export const Label = styled.label<{
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.s};

  ${({ css }) => css}
`;
