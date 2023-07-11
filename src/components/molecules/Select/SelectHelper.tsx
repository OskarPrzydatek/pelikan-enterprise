import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Select } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

interface ISelectHelper {
  isError?: boolean;
}

export const SelectHelper: React.FC<ISelectHelper> = ({
  isError,
}: ISelectHelper) => {
  const methods = useForm<{ destination: string }>();

  React.useEffect(() => {
    if (isError)
      methods.setError('destination', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, methods]);

  return (
    <StyledComponentsProvider>
      <FormProvider {...methods}>
        <Select
          errorMessageTestID="molecule-select-error-message"
          label="Default label"
          labelTestID="molecule-select-label"
          name="destination"
          optionItemTestID="molecule-select-option-list-item"
          optionsListTestID="molecule-select-options-list"
          registerOptions={{}}
          selectTestID="molecule-select"
          selectOptions={[
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' },
            { label: 'label3', value: 'value3' },
            { label: 'label4', value: 'value4' },
          ]}
        />
      </FormProvider>
    </StyledComponentsProvider>
  );
};
