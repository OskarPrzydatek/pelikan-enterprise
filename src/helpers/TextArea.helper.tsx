import React from 'react';
import { useForm } from 'react-hook-form';

import { StyledComponentsProvider } from '~/styles';

import { TextArea } from '../components/molecules/TextArea/TextArea.component';

interface ITextAreaHooked {
  isError?: boolean;
}

export const TextAreaHooked: React.FC<ITextAreaHooked> = ({
  isError,
}: ITextAreaHooked) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useForm<{ description: string }>();

  React.useEffect(() => {
    if (isError)
      setError('description', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, setError]);

  return (
    <StyledComponentsProvider>
      <TextArea
        error={errors}
        errorMessageTestID="molecule-textarea-error-message"
        label="Description"
        name="description"
        {...(register('description'), { required: true })}
      />
    </StyledComponentsProvider>
  );
};
