import { UseFormReturn } from 'react-hook-form';

import { TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { PageLayout } from '~/styles';
import { requiredValidator } from '~/validators';

interface IHashtag {
  hashtagName: string;
}

interface ICreateHashtagTemplate {
  creatHashtagFormMethods: UseFormReturn<IHashtag>;
  onSubmitCreateHashtag: () => void;
}

export const CreateHashtagTemplate: React.FC<ICreateHashtagTemplate> = ({
  creatHashtagFormMethods,
  onSubmitCreateHashtag,
}: ICreateHashtagTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={creatHashtagFormMethods}
        submitLabel="Dodaj"
        title="Dodaj hashtag"
        onSubmit={onSubmitCreateHashtag}
      >
        <TextField
          errorMessageTestID="create-hashtag-name-error"
          inputTestID="create-hashtag-name"
          label="Nazwa hashtagu"
          name="hashtagName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
