import { UseFormReturn } from 'react-hook-form';

import { Select, TextArea, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { transportTypeOptions } from '~/constants';
import { ITransport } from '~/models';
import { requiredValidator } from '~/validators';

interface IEditTransortTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editTransortFormMethods: UseFormReturn<ITransport>;
  onSubmitEditTransort: () => void;
}

export const EditTransortTemplate: React.FC<IEditTransortTemplate> = ({
  isLoading,
  error,
  editTransortFormMethods,
  onSubmitEditTransort,
}: IEditTransortTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editTransortFormMethods}
        submitLabel="Edytuj"
        title="Edytuj transport"
        onSubmit={onSubmitEditTransort}
      >
        <TextField
          errorMessageTestID="edit-transport-company-name-error"
          inputTestID="edit-company-name"
          label="Nazwa firmy transportowej"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="edit-transport-transport-type-error"
          label="Rodzaj transportu"
          name="transportType"
          selectOptions={transportTypeOptions}
          selectTestID="edit-transport-transport-kind"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextArea
          errorMessageTestID="edit-transport-desription-error"
          label="Opis"
          name="description"
          textareaTestID="edit-transport-desription"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </ErrorBundaryLoader>
  );
};
