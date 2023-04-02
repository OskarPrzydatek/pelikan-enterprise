import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextArea.styles';

type ErrorNameType = DeepMap<FieldValues, FieldError> | undefined;

interface ITextField extends IComponent {
  name: Path<FieldValues>;
  label: string;
  type?: 'text' | 'number';
  register?: UseFormRegister<FieldValues>;
  error?: Partial<DeepMap<FieldValues, FieldError>>;
  labelTestID?: string;
  textareaTestID?: string;
  errorMessageTestID?: string;
}

export const TextArea: React.FC<ITextField> = ({
  name,
  label,
  register,
  error,
  labelTestID,
  textareaTestID,
  errorMessageTestID,
}: ITextField) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
  const errorName = error && (error[name] as ErrorNameType);
  const isTextAreaErrorCSS = errorName ? S.textAreaErrorCSS : undefined;

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  return (
    <S.TextAreaWrapper>
      {isFocused && (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}
      <S.TextArea
        id={name}
        placeholder={placeholder}
        {...register}
        css={isTextAreaErrorCSS}
        data-testid={textareaTestID}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />
      {errorName && (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorName.message}
        </Text>
      )}
    </S.TextAreaWrapper>
  );
};
