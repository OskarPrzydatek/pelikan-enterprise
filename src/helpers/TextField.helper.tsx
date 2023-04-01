import React from 'react';
import { useForm } from 'react-hook-form';

import { StyledComponentsProvider } from '~/styles';

import { TextField } from '../components/molecules/TextField/TextField.component';

interface ITextFieldHooked {
  isError?: boolean;
}

export const TextFieldHooked: React.FC<ITextFieldHooked> = ({
  isError,
}: ITextFieldHooked) => {
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
      <TextField
        error={errors}
        errorMessageTestID="molecule-form-input-error-message"
        label="Email"
        name="email"
        {...(register('email'), { required: true })}
      />
    </StyledComponentsProvider>
  );
};
