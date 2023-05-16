import styled, { css, keyframes } from 'styled-components';

import { ICSS } from '~/models';

const onFocusMoveAnimation = keyframes`
 0% { top: 50%; opacity: 0 }
 100% { top: -12.5%; opacity: 1 }
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

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectChevron = styled.span<ICSS>`
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

export const Select = styled.input<ICSS>`
  appearance: none;
  border: none;
  width: 100%;
  line-height: 1.6;
  padding: 0.5%;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.m};
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

export const OptionsList = styled.ul`
  position: absolute;
  top: 120%;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  padding: 1rem;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
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
  z-index: 10;
`;

export const chevronUpCSS = css`
  animation-name: ${rotateUpAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const chevronDownCSS = css`
  animation-name: ${rotateDownAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const selectErrorCSS = css`
  border-color: ${({ theme }) => theme.colors.red};
`;

export const errorMessageCSS = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s} !important;
  margin-top: ${({ theme }) => theme.spaces.xs};
`;
