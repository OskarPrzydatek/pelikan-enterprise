import React from 'react';
import { useForm } from 'react-hook-form';

import { StyledComponentsProvider } from '~/styles';

import { FormInput } from './FormInput.component';

interface IFormInputHooked {
  isError?: boolean;
}

export const FormInputHooked: React.FC<IFormInputHooked> = ({
  isError,
}: IFormInputHooked) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useForm<{ email: string }>();

  React.useEffect(() => {
    if (isError)
      setError('email', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, setError]);

  return (
    <StyledComponentsProvider>
      <FormInput
        error={errors}
        errorMessageTestID="molecule-form-input-error-message"
        label="Email"
        name="email"
        {...(register('email'), { required: true })}
      />
    </StyledComponentsProvider>
  );
};
