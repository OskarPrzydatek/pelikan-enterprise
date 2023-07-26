import { UseFormReturn } from 'react-hook-form';

import { Select, TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { ISelectOption, ITransport } from '~/models';
import { PageLayout } from '~/styles';
import { requiredValidator } from '~/validators';

interface ICreateTransportTemplate {
  createTransportFormMethods: UseFormReturn<ITransport>;
  transportTypeOptions: ISelectOption[];
  onSubmitCreateTransport: () => void;
}

export const CreateTransportTemplate: React.FC<ICreateTransportTemplate> = ({
  createTransportFormMethods,
  transportTypeOptions,
  onSubmitCreateTransport,
}: ICreateTransportTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={createTransportFormMethods}
        submitLabel="Dodaj"
        title="Dodaj transport"
        onSubmit={onSubmitCreateTransport}
      >
        <TextField
          errorMessageTestID="create-transport-company-name-error"
          inputTestID="create-company-name"
          label="Nazwa firmy transportowej"
          name="companyName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="create-transport-transport-type-error"
          label="Rodzaj transportu"
          name="transportType"
          selectOptions={transportTypeOptions}
          selectTestID="create-transport-transport-kind"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextArea
          errorMessageTestID="create-transport-desription-error"
          label="Opis"
          name="description"
          textareaTestID="create-transport-desription"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
