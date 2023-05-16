import { UseFormReturn } from 'react-hook-form';

import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { SelectOption } from '~/models';
import { PageLayout } from '~/styles';
import { numericValidator, requiredValidator } from '~/validators';

interface IOffer {
  offerName: string;
  price: number;
  numberOfTickets: number;
  transport: string;
  destination: string;
  hotel: string;
  from: Date;
  to: Date;
  description: string;
}

interface ICreateOfferTemplate {
  createOfferFormMethods: UseFormReturn<IOffer>;
  destinationOptions: SelectOption[];
  hotelOptions: SelectOption[];
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
          name="offergName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
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
