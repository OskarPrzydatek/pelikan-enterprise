import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import { Field, Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextField.styles';

type ErrorNameType = DeepMap<FieldValues, FieldError> | undefined;

interface ITextField extends IComponent {
  name: Path<FieldValues>;
  label: string;
  register?: UseFormRegister<FieldValues>;
  error?: Partial<DeepMap<FieldValues, FieldError>>;
  labelTestID?: string;
  inputTestID?: string;
  errorMessageTestID?: string;
}

export const TextField: React.FC<ITextField> = ({
  name,
  label,
  register,
  error,
  labelTestID,
  inputTestID,
  errorMessageTestID,
}: ITextField) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
  const errorName = error && (error[name] as ErrorNameType);

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  return (
    <S.TextFieldWrapper>
      {isFocused && (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}
      <Field
        id={name}
        placeholder={placeholder}
        {...register}
        css={errorName ? S.textFieldCSS : undefined}
        dataTestID={inputTestID}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />
      {errorName && (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorName.message}
        </Text>
      )}
    </S.TextFieldWrapper>
  );
};
