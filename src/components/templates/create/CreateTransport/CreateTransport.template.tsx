import { UseFormReturn } from 'react-hook-form';

import { Select, TextField } from '~/components/molecules';
import { ISelectOption } from '~/components/molecules/Select/Select.component';
import { Form } from '~/components/organisms';
import { PageLayout } from '~/styles';
import { numericValidator, requiredValidator } from '~/validators';

interface ITransport {
  transportCompanyName: string;
  transportKind: string;
  from: string;
  to: string;
  price: number;
}

interface ICreateTransportTemplate {
  createTransportFormMethods: UseFormReturn<ITransport>;
  transportKindOptions: ISelectOption[];
  fromOptions: ISelectOption[];
  toOptions: ISelectOption[];
  onSubmitCreateTransport: () => void;
}

export const CreateTransportTemplate: React.FC<ICreateTransportTemplate> = ({
  createTransportFormMethods,
  transportKindOptions,
  fromOptions,
  toOptions,
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
          inputTestID="create-transport-company-name"
          label="Nazwa firmy transportowej"
          name="transportCompanyName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="create-transport-transport-kind-error"
          label="Rodzaj transportu"
          name="transportKind"
          selectOptions={transportKindOptions}
          selectTestID="create-transport-transport-kind"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="create-transpotr-from-error"
          label="from"
          name="Miejsce początkowe"
          selectOptions={fromOptions}
          selectTestID="create-transpotr-from"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="create-transpotr-to-error"
          label="to"
          name="Miejsce docelowe"
          selectOptions={toOptions}
          selectTestID="create-transpotr-to"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-transport-price-error"
          inputTestID="create-transport-price"
          label="Cena"
          name="price"
          registerOptions={{
            ...numericValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
