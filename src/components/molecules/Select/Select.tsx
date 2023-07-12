import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

import { Button, Icon, Label, Text } from '~/components/atoms';
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
  optionsListTestID?: string;
  optionItemTestID?: string;
  errorMessageTestID?: string;
}

export const Select: React.FC<ISelect> = ({
  name,
  label,
  selectOptions,
  registerOptions,
  selectTestID,
  labelTestID,
  optionsListTestID,
  optionItemTestID,
  errorMessageTestID,
}: ISelect) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [selectedLabel, setSelectedLabel] = React.useState('');
  const [showOptions, setShowOptions] = React.useState<boolean | undefined>(
    undefined
  );
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const placeholder = isFocused ? '' : label;
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

  const handleBlurPreventForItemSelect = (
    event: React.MouseEvent<HTMLUListElement>
  ) => {
    event.preventDefault();
  };

  return (
    <S.SelectWrapper>
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
          readOnly
          css={isSelectErrorCSS}
          data-testid={selectTestID}
          placeholder={placeholder}
          value={selectedLabel}
          {...register(name, registerOptions)}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
      </S.SelectWrapper>
      {showOptions ? (
        <S.OptionsList
          data-testid={optionsListTestID}
          onMouseDown={handleBlurPreventForItemSelect}
        >
          {selectOptions.map(({ label, value }) => {
            const handleOnClickSelected = () => {
              setValue(name, value, { shouldValidate: true });
              setSelectedLabel(label);
              setShowOptions(false);
            };

            return (
              <li key={`${label}-${value}`}>
                <Button
                  dataTestID={`${optionItemTestID!}-${label}`}
                  variant="ghost"
                  onClick={handleOnClickSelected}
                >
                  {label}
                </Button>
              </li>
            );
          })}
        </S.OptionsList>
      ) : null}
      {errors[name] ? (
        <Text css={S.errorMessageCSS} dataTestID={errorMessageTestID}>
          {errorMessage}
        </Text>
      ) : null}
    </S.SelectWrapper>
  );
};
