import { UseFormReturn } from 'react-hook-form';

import { TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { IAttraction } from '~/models';
import { PageLayout } from '~/styles';
import { numericValidator, requiredValidator } from '~/validators';

interface ICreateAttractionTemplate {
  createAttractionFormMethods: UseFormReturn<IAttraction>;
  onSubmitCreateAttraction: () => void;
}

export const CreateAttractionTemplate: React.FC<ICreateAttractionTemplate> = ({
  createAttractionFormMethods,
  onSubmitCreateAttraction,
}: ICreateAttractionTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={createAttractionFormMethods}
        submitLabel="Dodaj"
        title="Dodaj atrakcję"
        onSubmit={onSubmitCreateAttraction}
      >
        <TextField
          errorMessageTestID="create-attraction-name-error"
          inputTestID="create-attraction-name"
          label="Nazwa atrakcji"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-attraction-price-error"
          inputTestID="create-attraction-price"
          label="Cena"
          name="price"
          registerOptions={{
            ...numericValidator,
          }}
        />
        <TextArea
          errorMessageTestID="create-description-error"
          label="Opis"
          name="create-description"
          textareaTestID="attraction-description"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
