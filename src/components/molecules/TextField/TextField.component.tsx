import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextField.styles';

interface ITextField extends IComponent {
  name: string;
  label: string;
  labelTestID?: string;
  inputTestID?: string;
  errorMessageTestID?: string;
}

export const TextField: React.FC<ITextField> = ({
  name,
  label,
  labelTestID,
  inputTestID,
  errorMessageTestID,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
  const errorMessage = errors[name]?.message as string;
  const isTextFieldErrorCSS = errors[name] ? S.textFieldErrorCSS : undefined;

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  return (
    <S.TextFieldWrapper>
      {isFocused && (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}
      <S.Field
        css={isTextFieldErrorCSS}
        data-testid={inputTestID}
        id={name}
        // name={name}
        placeholder={placeholder}
        {...register(name)}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.TextFieldWrapper>
  );
};
