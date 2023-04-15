import React from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextArea.styles';

interface ITextField extends IComponent {
  name: Path<FieldValues>;
  label: string;
  labelTestID?: string;
  textareaTestID?: string;
  errorMessageTestID?: string;
}

export const TextArea: React.FC<ITextField> = ({
  name,
  label,
  labelTestID,
  textareaTestID,
  errorMessageTestID,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
  const errorMessage = errors[name]?.message as string;
  const isTextAreaErrorCSS = errors[name] ? S.textAreaErrorCSS : undefined;

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
        {...register(name)}
        css={isTextAreaErrorCSS}
        data-testid={textareaTestID}
        onBlur={handleIsFocused}
        onFocus={handleIsFocused}
      />
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.TextAreaWrapper>
  );
};
