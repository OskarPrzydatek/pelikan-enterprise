import styled, { css, keyframes } from 'styled-components';

// TODO: Change this with PH-16 task
import { Label } from '~/components/atoms/Label/Label.styles';

const onFocusMoveAnimation = keyframes`
 0% { top: 50%; opacity: 0 }
 100% { top: -12.5%; opacity: 1 }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > input {
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }
`;

export const FormInputLabel = styled(Label)`
  position: absolute;
  padding: 0 ${({ theme }) => theme.spaces.xs};
  margin-left: ${({ theme }) => theme.spaces.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  animation-name: ${onFocusMoveAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
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

export const textFieldCSS = css`
  border-color: ${({ theme }) => theme.colors.red};
`;

export const errorMessageCSS = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s} !important;
`;
