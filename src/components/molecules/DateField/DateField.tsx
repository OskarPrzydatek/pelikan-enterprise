import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

import { Label, Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './DateField.styles';

interface IDateField extends IComponent {
  name: string;
  label: string;
  registerOptions: RegisterOptions<FieldValues, string>;
  labelTestID?: string;
  inputTestID?: string;
  errorMessageTestID?: string;
}

export const DateField: React.FC<IDateField> = ({
  name,
  label,
  registerOptions,
  labelTestID,
  inputTestID,
  errorMessageTestID,
}: IDateField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [isFilled, setIsFilled] = React.useState<boolean>(false);

  const dateInputRef = React.useRef<HTMLInputElement | null>(null);

  const isLabelRendered = isFocused || isFilled;

  const minDate = new Date().toISOString().split('T')[0];
  const errorMessage = errors[name]?.message as string;

  const focusedLabelColorCSS = isFocused ? S.focusedLabelCSS : undefined;
  const dateFieldErrorCSS = errors[name] ? S.dateFieldErrorCSS : undefined;

  const handleIsBlured = () => setIsFocused(false);
  const handleIsClicked = () => dateInputRef.current?.showPicker();
  const handleIsFocused = () => setIsFocused(true);

  const handleIsFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValue = event.target.value !== '';

    if (isInputValue) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  };

  const { ref, ...restOfRegister } = register(name, {
    ...registerOptions,
    onBlur: handleIsBlured,
    onChange: handleIsFilled,
  });

  const handleRefFormRegister = (event: HTMLInputElement | null) => {
    ref(event);
    dateInputRef.current = event;
  };

  return (
    <S.FlexColumn>
      <S.DateFieldWrapper>
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
          ref={handleRefFormRegister}
          css={dateFieldErrorCSS}
          data-testid={inputTestID}
          min={minDate}
          type="date"
          {...restOfRegister}
          onClick={handleIsClicked}
          onFocus={handleIsFocused}
          onKeyDown={(e) => e.preventDefault()}
        />
      </S.DateFieldWrapper>
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.FlexColumn>
  );
};
