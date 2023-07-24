import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextField.styles';

interface ITextField extends IComponent {
  name: string;
  label: string;
  registerOptions: RegisterOptions<FieldValues, string>;
  labelTestID?: string;
  inputTestID?: string;
  errorMessageTestID?: string;
}

export const TextField: React.FC<ITextField> = ({
  name,
  label,
  registerOptions,
  labelTestID,
  inputTestID,
  errorMessageTestID,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [isFilled, setIsFilled] = React.useState<boolean>(false);

  const placeholder = isFocused || isFilled ? '' : label;
  const errorMessage = errors[name]?.message as string;
  const isTextFieldErrorCSS = errors[name] ? S.textFieldErrorCSS : undefined;

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  const handleIsFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && event.target.value !== '') {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  };

  return (
    <S.TextFieldWrapper>
      {(isFocused || isFilled) && (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}
      <S.Field
        css={isTextFieldErrorCSS}
        data-testid={inputTestID}
        id={name}
        placeholder={placeholder}
        {...register(name, registerOptions)}
        onBlur={handleIsFocused}
        onChange={handleIsFilled}
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
