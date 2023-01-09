import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

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
        <S.FormInputLabel
          data-testid={labelTestID}
          htmlFor={name}
          isFocused={isFocused}
        >
          {label}
        </S.FormInputLabel>
      )}

      <S.FormInput
        id={name}
        placeholder={placeholder}
        {...register}
        data-testid={inputTestID}
        validationBorder={!!errorName}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />

      {errorName && (
        <S.ErrorMessage data-testid={errorMessageTestID}>
          {errorName.message}
        </S.ErrorMessage>
      )}
    </S.FormInputWrapper>
  );
};
