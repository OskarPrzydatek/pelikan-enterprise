import styled, { css, keyframes } from 'styled-components';

import { ICSS } from '~/models';

const onFocusMoveAnimation = keyframes`
 0% { top: 50%; opacity: 0 }
 100% { top: -20%; opacity: 1 }
`;

const rotateUpAnimation = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`;

const rotateDownAnimation = keyframes`
 from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectInputWrapper = styled.div``;

export const SelectChevronWrapper = styled.span<ICSS>`
  z-index: -1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0.3rem;
  width: 0.8rem;

  @media ${({ theme }) => theme.breakpoints.phone} {
    right: 0.6rem;
    width: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    right: 0.8rem;
    width: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    right: 0.5rem;
  }

  ${({ css }) => css}
`;

export const Select = styled.select<ICSS>`
  appearance: none;
  border: none;
  background-color: transparent;
  width: 100%;
  line-height: 1.8;
  cursor: pointer;
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

export const Option = styled.option``;

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

export const labelCSS = css`
  z-index: 10;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  position: absolute;
  padding: 0 ${({ theme }) => theme.spaces.xs};
  margin-left: ${({ theme }) => theme.spaces.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  animation-name: ${onFocusMoveAnimation};
`;

export const chevronUpCSS = css`
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: ${rotateUpAnimation};
`;

export const chevronDownCSS = css`
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: ${rotateDownAnimation};
`;

export const selectErrorCSS = css`
  border-color: ${({ theme }) => theme.colors.red};
`;

export const errorMessageCSS = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s} !important;
  margin-top: ${({ theme }) => theme.spaces.xs};
`;
