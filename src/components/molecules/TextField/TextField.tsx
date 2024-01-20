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
  type?: 'text' | 'password';
}

export const TextField: React.FC<ITextField> = ({
  name,
  label,
  registerOptions,
  labelTestID,
  inputTestID,
  errorMessageTestID,
  type,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [isFilled, setIsFilled] = React.useState<boolean>(false);

  const isLabelRendered = isFocused || isFilled;

  const placeholder = isLabelRendered ? '' : label;
  const errorMessage = errors[name]?.message as string;

  const focusedLabelColorCSS = isFocused ? S.focusedLabelCSS : undefined;
  const textFieldErrorCSS = errors[name] ? S.textFieldErrorCSS : undefined;

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  const handleIsFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValue = event.target.value !== '';

    if (isInputValue) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  };

  return (
    <S.FlexColumn>
      <S.TextFieldWrapper>
        {isLabelRendered ? (
          <S.LabelWrapper>
            <Label
              css={focusedLabelColorCSS}
              dataTestID={labelTestID}
              htmlFor={name}
            >
              {label}
            </Label>
          </S.LabelWrapper>
        ) : null}
        <S.Field
          css={textFieldErrorCSS}
          data-testid={inputTestID}
          id={name}
          placeholder={placeholder}
          type={type}
          {...register(name, {
            ...registerOptions,
            onBlur: handleIsFocused,
            onChange: handleIsFilled,
          })}
          onFocus={handleIsFocused}
        />
      </S.TextFieldWrapper>
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.FlexColumn>
  );
};

TextField.defaultProps = {
  type: 'text',
};
