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
  const [isFilled, setIsFilled] = React.useState<boolean>(false);

  const isLabelRendered = isFocused || isFilled;

  const isFocusedLabelColorCSS = isFocused ? S.focusedLabelCSS : undefined;
  const isFocusedChevronCSS = showOptions ? S.chevronUpCSS : S.chevronDownCSS;
  const isChevronCSS =
    showOptions !== undefined ? isFocusedChevronCSS : undefined;
  const isSelectErrorCSS = errors[name] ? S.selectErrorCSS : undefined;
  const errorMessage = errors[name]?.message as string;

  const handleIsFocused = () => {
    setShowOptions(true);
    setIsFocused(true);
  };

  const handleIsBlured = () => {
    setShowOptions(false);
    setIsFocused(false);
  };

  const handleIsFilled = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const isInputValue = event.target.value !== '';

    if (isInputValue) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  };

  return (
    <S.FlexColumn>
      <S.SelectWrapper>
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
        <S.SelectChevronWrapper css={isChevronCSS}>
          <Icon icon={Icons.CHEVRON} />
        </S.SelectChevronWrapper>
        <S.Select
          css={isSelectErrorCSS}
          data-testid={selectTestID}
          defaultValue=""
          {...register(name, registerOptions)}
          onBlur={handleIsBlured}
          onChange={handleIsFilled}
          onFocus={handleIsFocused}
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
