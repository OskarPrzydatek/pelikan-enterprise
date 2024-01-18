import { UseFormReturn } from 'react-hook-form';

import { TextArea, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { IAttraction } from '~/models';
import { numericValidator, requiredValidator } from '~/validators';

interface IEditAttractionTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editAttractionFormMethods: UseFormReturn<IAttraction>;
  onSubmitEditAttraction: () => void;
}

export const EditAttractionTemplate: React.FC<IEditAttractionTemplate> = ({
  isLoading,
  error,
  editAttractionFormMethods,
  onSubmitEditAttraction,
}: IEditAttractionTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editAttractionFormMethods}
        submitLabel="Edytuj"
        title="Edytuj atrakcję"
        onSubmit={onSubmitEditAttraction}
      >
        <TextField
          errorMessageTestID="edit-attraction-name-error"
          inputTestID="edit-attraction-name"
          label="Nazwa atrakcji"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="edit-attraction-price-error"
          inputTestID="edit-attraction-price"
          label="Cena"
          name="price"
          registerOptions={{
            ...numericValidator,
          }}
        />
        <TextArea
          errorMessageTestID="edit-description-error"
          label="Opis"
          name="description"
          textareaTestID="attraction-description"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </ErrorBundaryLoader>
  );
};
