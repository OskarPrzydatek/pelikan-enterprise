import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import { Field, Label, Text } from '~/components/atoms';

import * as S from './FormInput.styles';

interface IFormInput {
  name: Path<FieldValues>;
  label: string;
  register?: UseFormRegister<FieldValues>;
  error?: Partial<DeepMap<FieldValues, FieldError>>;
  labelTestID?: string;
  inputTestID?: string;
  errorMessageTestID?: string;
}

export const FormInput: React.FC<IFormInput> = ({
  name,
  label,
  register,
  error,
  labelTestID,
  inputTestID,
  errorMessageTestID,
}: IFormInput) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
  const errorName =
    error && (error[name] as DeepMap<FieldValues, FieldError> | undefined);

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  return (
    <S.FormInputWrapper>
      {isFocused && (
        <Label css={S.labelCSS} data-testid={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}

      <Field
        id={name}
        placeholder={placeholder}
        {...register}
        css={errorName ? S.textFieldCSS : undefined}
        data-testid={inputTestID}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />

      {errorName && (
        <Text css={S.errorMessageCSS} data-testid={errorMessageTestID}>
          {errorName.message}
        </Text>
      )}
    </S.FormInputWrapper>
  );
};
