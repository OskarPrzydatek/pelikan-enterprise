import styled, { css, keyframes } from 'styled-components';

import { ICSS } from '~/models';

const onFocusMoveAnimation = keyframes`
 0% { top: 50%; opacity: 0 }
 100% { top: -19%; opacity: 1 }
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Field = styled.input<ICSS>`
  appearance: none;
  border: none;
  width: 100%;
  line-height: 1.8;
  padding: ${({ theme }) => theme.spaces.xs};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.6;
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

  ${({ css }) => css}
`;

export const LabelWrapper = styled.div`
  position: absolute;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: ${onFocusMoveAnimation};
  padding: 0 ${({ theme }) => theme.spaces.xxs};
  margin-left: ${({ theme }) => theme.spaces.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const focusedLabelCSS = css`
  color: ${({ theme }) => theme.colors.lightBlue} !important;
`;

export const textFieldErrorCSS = css`
  border-color: ${({ theme }) => theme.colors.red};
`;

export const errorMessageCSS = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s} !important;
  margin-top: ${({ theme }) => theme.spaces.xs};
`;
