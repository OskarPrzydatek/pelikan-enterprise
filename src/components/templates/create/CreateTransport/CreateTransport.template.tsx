import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { Select, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { ISelectOption, ITransport } from '~/models';
import { PageLayout } from '~/styles';
import { numericValidator, requiredValidator } from '~/validators';

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
        <Row>
          <Select
            errorMessageTestID="create-transpotr-from-error"
            label="Miejsce początkowe"
            name="from"
            selectOptions={fromOptions}
            selectTestID="create-transpotr-from"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <Select
            errorMessageTestID="create-transpotr-to-error"
            label="Miejsce docelowe"
            name="to"
            selectOptions={toOptions}
            selectTestID="create-transpotr-to"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
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
