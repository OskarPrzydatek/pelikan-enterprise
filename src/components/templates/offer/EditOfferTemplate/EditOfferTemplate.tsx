import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { IOffer, ISelectOption } from '~/models';
import { numericValidator, requiredValidator } from '~/validators';

interface IEditOfferTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editOfferFormMethods: UseFormReturn<IOffer>;
  transportOptions: ISelectOption[];
  hotelOptions: ISelectOption[];
  onSubmitEditOffer: () => void;
}

export const EditOfferTemplate: React.FC<IEditOfferTemplate> = ({
  isLoading,
  error,
  editOfferFormMethods,
  transportOptions,
  hotelOptions,
  onSubmitEditOffer,
}: IEditOfferTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editOfferFormMethods}
        submitLabel="Edytuj"
        title="Edytuj ofertę"
        onSubmit={onSubmitEditOffer}
      >
        <TextField
          errorMessageTestID="edit-offer-name-error"
          inputTestID="edit-offer-name"
          label="Nazwa oferty"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Row>
          <TextField
            errorMessageTestID="edit-offer-number-of-guests-error"
            inputTestID="edit-offer-quantity"
            label="Ilość miejsc"
            name="quantity"
            registerOptions={{
              ...numericValidator,
            }}
          />
          <Select
            errorMessageTestID="edit-offer-transport-error"
            label="Transport"
            name="transport.id"
            selectOptions={transportOptions}
            selectTestID="edit-offer-transport"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <TextField
            errorMessageTestID="edit-offer-destination-error"
            inputTestID="edit-offer-destination"
            label="Miejsce docelowe"
            name="location"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <Select
            errorMessageTestID="edit-offer-hotel-error"
            label="Hotel"
            name="hotel.id"
            selectOptions={hotelOptions}
            selectTestID="edit-offer-hotel"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <DateField
            errorMessageTestID="edit-offer-form-error"
            inputTestID="edit-offer-form"
            label="Od"
            name="termFrom"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <DateField
            errorMessageTestID="edit-offer-to-error"
            inputTestID="edit-offer-to"
            label="Do"
            name="termTo"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <TextArea
          errorMessageTestID="edit-offer-desription-error"
          label="Opis"
          name="description"
          textareaTestID="edit-offer-desription"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="edit-offer-price-error"
          inputTestID="edit-offer-price"
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
