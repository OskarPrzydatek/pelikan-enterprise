import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { TextField } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

interface ITextFieldHelper {
  isError?: boolean;
}

export const TextFieldHelper: React.FC<ITextFieldHelper> = ({
  isError,
}: ITextFieldHelper) => {
  const methods = useForm<{ email: string }>();

  React.useEffect(() => {
    if (isError)
      methods.setError('email', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, methods]);

  return (
    <StyledComponentsProvider>
      <FormProvider {...methods}>
        <TextField
          errorMessageTestID="molecule-textfield-error-message"
          inputTestID="molecule-textfield"
          label="Email"
          labelTestID="molecule-textfield-label"
          name="email"
          registerOptions={{}}
        />
      </FormProvider>
    </StyledComponentsProvider>
  );
};
