import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DateField } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

interface IDateFieldHelper {
  isError?: boolean;
}

export const DateFieldHelper: React.FC<IDateFieldHelper> = ({
  isError,
}: IDateFieldHelper) => {
  const methods = useForm<{ startDate: string }>();

  React.useEffect(() => {
    if (isError)
      methods.setError('startDate', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, methods]);

  return (
    <StyledComponentsProvider>
      <FormProvider {...methods}>
        <DateField
          errorMessageTestID="molecule-datefield-error-message"
          inputTestID="molecule-datefield"
          label="Od"
          labelTestID="molecule-datefield-label"
          name="startDate"
          registerOptions={{}}
        />
      </FormProvider>
    </StyledComponentsProvider>
  );
};
