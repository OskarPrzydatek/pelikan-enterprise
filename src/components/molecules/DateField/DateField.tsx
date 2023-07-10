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

  const minDate = new Date().toISOString().split('T')[0];
  const errorMessage = errors[name]?.message as string;

  const handleIsFocused = () => setIsFocused(true);

  const handleIsBlured = () => setIsFocused(false);

  return (
    <S.DateFieldWrapper>
      {isFocused && (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      )}
      <S.Field
        data-testid={inputTestID}
        min={minDate}
        type="date"
        {...register(name, registerOptions)}
        onBlur={handleIsBlured}
        onFocus={handleIsFocused}
      />
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.DateFieldWrapper>
  );
};
