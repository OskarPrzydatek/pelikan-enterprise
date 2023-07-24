import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

import { Icon, Label, Text } from '~/components/atoms';
import { Icons } from '~/constants';
import { IComponent, ISelectOption } from '~/models';

import * as S from './Select.styles';

interface ISelect extends IComponent {
  name: string;
  label: string;
  selectOptions: ISelectOption[];
  registerOptions: RegisterOptions<FieldValues, string>;
  selectTestID?: string;
  labelTestID?: string;
  errorMessageTestID?: string;
}

export const Select: React.FC<ISelect> = ({
  name,
  label,
  selectOptions,
  registerOptions,
  selectTestID,
  labelTestID,
  errorMessageTestID,
}: ISelect) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showOptions, setShowOptions] = React.useState<boolean | undefined>(
    undefined
  );
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const errorMessage = errors[name]?.message as string;

  const isFocusedChevronCSS = showOptions ? S.chevronUpCSS : S.chevronDownCSS;
  const isChevronCSS =
    showOptions !== undefined ? isFocusedChevronCSS : undefined;
  const isSelectErrorCSS = errors[name] ? S.selectErrorCSS : undefined;

  const handleOnFocus = () => {
    setShowOptions(true);
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setShowOptions(false);
    setIsFocused(false);
  };

  return (
    <S.FlexColumn>
      {isFocused ? (
        <Label css={S.labelCSS} dataTestID={labelTestID} htmlFor={name}>
          {label}
        </Label>
      ) : null}
      <S.SelectWrapper>
        <S.SelectChevronWrapper css={isChevronCSS}>
          <Icon icon={Icons.CHEVRON} />
        </S.SelectChevronWrapper>
        <S.Select
          css={isSelectErrorCSS}
          data-testid={selectTestID}
          defaultValue=""
          {...register(name, registerOptions)}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        >
          <>
            <S.Option disabled value="">
              {label}
            </S.Option>
            {selectOptions.map(({ label, value }) => (
              <S.Option key={`${label}-${value}`} value={value}>
                {label}
              </S.Option>
            ))}
          </>
        </S.Select>
      </S.SelectWrapper>
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.FlexColumn>
  );
};
