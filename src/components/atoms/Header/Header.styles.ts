import styled from 'styled-components';

export const Header = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.darkBlue};

  font-size: ${({ theme }) => theme.fontSizes.s};
  margin: ${({ theme }) => theme.spaces.xs} 0;

  @media ${({ theme }) => theme.breakpoints.phone} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: ${({ theme }) => theme.spaces.xs} 0;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin: ${({ theme }) => theme.spaces.s} 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin: ${({ theme }) => theme.spaces.s} 0;
  }
`;
