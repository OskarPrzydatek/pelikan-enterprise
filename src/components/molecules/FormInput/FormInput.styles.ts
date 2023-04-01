import styled, { keyframes } from 'styled-components';

// TODO: Change this with PH-16 task
import { Field } from '~/components/atoms/Field/Field.styles';
import { Label } from '~/components/atoms/Label/Label.styles';
import { Text } from '~/components/atoms/Text/Text.styles';

interface IStyledFormInput {
  validationBorder: boolean;
}

interface IStyledFormInputLabel {
  isFocused: boolean;
}

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

export const FormInputLabel = styled(Label)<IStyledFormInputLabel>`
  position: absolute;
  padding: 0 ${({ theme }) => theme.spaces.xs};
  margin-left: ${({ theme }) => theme.spaces.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  animation-name: ${onFocusMoveAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const FormInput = styled(Field)<IStyledFormInput>`
  border-color: ${({ theme, validationBorder }) =>
    validationBorder ? theme.colors.red : theme.colors.darkBlue};
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
