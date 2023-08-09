import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { IOffer, ISelectOption } from '~/models';
import { numericValidator, requiredValidator } from '~/validators';

interface ICreateOfferTemplate {
  isLoading: boolean;
  error: Error | undefined;
  createOfferFormMethods: UseFormReturn<IOffer>;
  transportOptions: ISelectOption[];
  hotelOptions: ISelectOption[];
  onSubmitCreateOffer: () => void;
}

export const CreateOfferTemplate: React.FC<ICreateOfferTemplate> = ({
  isLoading,
  error,
  createOfferFormMethods,
  transportOptions,
  hotelOptions,
  onSubmitCreateOffer,
}: ICreateOfferTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
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
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Row>
          <TextField
            errorMessageTestID="create-offer-number-of-guests-error"
            inputTestID="create-offer-quantity"
            label="Ilość miejsc"
            name="quantity"
            registerOptions={
              {
                // TODO: take validaton back when BE' ll ready
                // ...numericValidator,
              }
            }
          />
          <Select
            errorMessageTestID="create-offer-transport-error"
            label="Transport"
            name="transport.id"
            selectOptions={transportOptions}
            selectTestID="create-offer-transport"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <TextField
            errorMessageTestID="create-offer-destination-error"
            inputTestID="create-offer-destination"
            label="Miejsce docelowe"
            name="location"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <Select
            errorMessageTestID="create-offer-hotel-error"
            label="Hotel"
            name="hotel.id"
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
            name="termFrom"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <DateField
            errorMessageTestID="create-offer-to-error"
            inputTestID="create-offer-to"
            label="Do"
            name="termTo"
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
        <TextField
          errorMessageTestID="create-offer-price-error"
          inputTestID="create-offer-price"
          label="Cena"
          name="price"
          registerOptions={{
            ...numericValidator,
          }}
        />
      </Form>
    </ErrorBundaryLoader>
  );
};
