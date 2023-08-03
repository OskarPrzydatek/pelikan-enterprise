import { css, keyframes } from 'styled-components';

const ellipsisDotsanimation = keyframes`
  0% { content: '.' }
  33% { content: '..' }
  66% { content: '...' }
`;

export const labelCSS = css`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.m} !important;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l} !important;
  }

  &::after {
    content: '.';
    display: inline-block;
    animation-name: ${ellipsisDotsanimation};
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    width: 1em;
    text-align: left;
  }
`;
