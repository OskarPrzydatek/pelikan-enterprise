import { UseFormReturn } from 'react-hook-form';

import { TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { IHashtag } from '~/models';
import { requiredValidator } from '~/validators';

interface IEditHashtagTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editHashtagFormMethods: UseFormReturn<IHashtag>;
  onSubmitEditHashtag: () => void;
}

export const EditHashtagTemplate: React.FC<IEditHashtagTemplate> = ({
  isLoading,
  error,
  editHashtagFormMethods,
  onSubmitEditHashtag,
}: IEditHashtagTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editHashtagFormMethods}
        submitLabel="Edytuj"
        title="Edytuj hashtag"
        onSubmit={onSubmitEditHashtag}
      >
        <TextField
          errorMessageTestID="create-hashtag-name-error"
          inputTestID="create-hashtag-name"
          label="Nazwa hashtagu"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </ErrorBundaryLoader>
  );
};
