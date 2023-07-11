import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { IOffer, ISelectOption } from '~/models';
import { PageLayout } from '~/styles';
import { numericValidator, requiredValidator } from '~/validators';

interface ICreateOfferTemplate {
  createOfferFormMethods: UseFormReturn<IOffer>;
  destinationOptions: ISelectOption[];
  hotelOptions: ISelectOption[];
  onSubmitCreateOffer: () => void;
}

export const CreateOfferTemplate: React.FC<ICreateOfferTemplate> = ({
  createOfferFormMethods,
  destinationOptions,
  hotelOptions,
  onSubmitCreateOffer,
}: ICreateOfferTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={createOfferFormMethods}
        submitLabel="Dodaj"
        title="Dodaj ofertę"
        onSubmit={onSubmitCreateOffer}
      >
        <TextField
          errorMessageTestID="create-offer-name-error"
          inputTestID="create-offer-name"
          label="Nazwa oferty"
          name="offerName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Row>
          <TextField
            errorMessageTestID="create-offer-price-error"
            inputTestID="create-offer-price"
            label="Cena"
            name="price"
            registerOptions={{
              ...numericValidator,
            }}
          />
          <TextField
            errorMessageTestID="create-offer-number-of-tickets-error"
            inputTestID="create-offer-number-of-tickets"
            label="Liczba miejsc"
            name="numberOfTickets"
            registerOptions={{
              ...numericValidator,
            }}
          />
        </Row>
        <Row>
          <Select
            errorMessageTestID="create-offer-destination-error"
            label="Miejsce docelowe"
            name="destination"
            selectOptions={destinationOptions}
            selectTestID="create-offer-destination"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <Select
            errorMessageTestID="create-offer-hotel-error"
            label="Hotel"
            name="hotel"
            selectOptions={hotelOptions}
            selectTestID="create-offer-hotel"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <DateField
            errorMessageTestID="create-offer-form-error"
            inputTestID="create-offer-form"
            label="Od"
            name="from"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <DateField
            errorMessageTestID="create-offer-to-error"
            inputTestID="create-offer-to"
            label="Do"
            name="to"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <TextArea
          errorMessageTestID="create-offer-desription-error"
          label="Opis"
          name="description"
          textareaTestID="create-offer-desription"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
