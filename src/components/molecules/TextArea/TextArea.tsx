import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './TextArea.styles';

interface ITextField extends IComponent {
  name: string;
  label: string;
  registerOptions: RegisterOptions<FieldValues, string>;
  labelTestID?: string;
  textareaTestID?: string;
  errorMessageTestID?: string;
}

export const TextArea: React.FC<ITextField> = ({
  name,
  label,
  registerOptions,
  labelTestID,
  textareaTestID,
  errorMessageTestID,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [isFilled, setIsFilled] = React.useState<boolean>(false);

  const isLabelRendered = isFocused || isFilled;

  const isFocusedLabelColorCSS = isFocused ? S.focusedLabelCSS : undefined;
  const placeholder = isFocused ? '' : label;
  const textAreaErrorCSS = errors[name] ? S.textAreaErrorCSS : undefined;
  const errorMessage = errors[name]?.message as string;

  const handleIsFocused = () => setIsFocused((prev: boolean) => !prev);

  const handleIsFilled = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const isInputValue = event.target.value !== '';

    if (isInputValue) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  };

  return (
    <S.FlexColumn>
      <S.TextAreaWrapper>
        {isLabelRendered ? (
          <S.LabelWrapper>
            <Label
              css={isFocusedLabelColorCSS}
              dataTestID={labelTestID}
              htmlFor={name}
            >
              {label}
            </Label>
          </S.LabelWrapper>
        ) : null}
        <S.TextArea
          id={name}
          placeholder={placeholder}
          {...register(name, registerOptions)}
          css={textAreaErrorCSS}
          data-testid={textareaTestID}
          onBlur={handleIsFocused}
          onChange={handleIsFilled}
          onFocus={handleIsFocused}
        />
      </S.TextAreaWrapper>
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.FlexColumn>
  );
};
