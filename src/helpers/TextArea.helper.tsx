import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { StyledComponentsProvider } from '~/styles';

import { TextArea } from '../components/molecules/TextArea/TextArea.component';

interface ITextAreaHelper {
  isError?: boolean;
}

export const TextAreaHelper: React.FC<ITextAreaHelper> = ({
  isError,
}: ITextAreaHelper) => {
  const methods = useForm<{ description: string }>();

  React.useEffect(() => {
    if (isError)
      methods.setError('description', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, methods]);

  return (
    <StyledComponentsProvider>
      <FormProvider {...methods}>
        <TextArea
          errorMessageTestID="molecule-textarea-error-message"
          label="Description"
          labelTestID="molecule-textarea-label"
          name="description"
          registerOptions={{}}
          textareaTestID="molecule-textarea"
        />
      </FormProvider>
    </StyledComponentsProvider>
  );
};
