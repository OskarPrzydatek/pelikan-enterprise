import styled, { css, keyframes } from 'styled-components';

import { ICSS } from '~/models';

const onFocusMoveAnimation = keyframes`
 0% { top: 50%; opacity: 0 }
 100% { top: -4.5%; opacity: 1 }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & > textarea {
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }
`;

export const TextArea = styled.textarea<ICSS>`
  appearance: none;
  border: none;
  resize: none;
  width: 100%;
  min-height: 10rem;
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

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const labelCSS = css`
  position: absolute;
  padding: 0 ${({ theme }) => theme.spaces.xs};
  margin-left: ${({ theme }) => theme.spaces.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  animation-name: ${onFocusMoveAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const textAreaErrorCSS = css`
  border-color: ${({ theme }) => theme.colors.red};
`;

export const errorMessageCSS = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s} !important;
`;
