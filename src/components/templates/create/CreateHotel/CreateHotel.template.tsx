import { UseFormReturn } from 'react-hook-form';

import { TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { PageLayout } from '~/styles';
import { requiredValidator, starsValidator } from '~/validators';

interface IHotel {
  hotelName: string;
  address: string;
  pricePerPerson: number;
  starRating: number;
  description: string;
}

interface ICreateHotelTemplate {
  createHotelFormMethods: UseFormReturn<IHotel>;
  onSubmitCreateHotel: () => void;
}

export const CreateHotelTemplate: React.FC<ICreateHotelTemplate> = ({
  createHotelFormMethods,
  onSubmitCreateHotel,
}: ICreateHotelTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={createHotelFormMethods}
        submitLabel="Dodaj"
        title="Dodaj hotel"
        onSubmit={onSubmitCreateHotel}
      >
        <TextField
          errorMessageTestID="create-hotel-name-error"
          inputTestID="create-hotel-name"
          label="Nazwa hotelu"
          name="hotelName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-hotel-address-error"
          inputTestID="create-hotel-address"
          label="Adres"
          name="address"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-hotel-stars-rating-error"
          inputTestID="create-hotel-stars-rating"
          label="Ilość gwiazdek"
          name="starRating"
          registerOptions={{
            ...starsValidator,
          }}
        />
        <TextArea
          errorMessageTestID="create-hotel-description-error"
          label="Opis"
          name="description"
          textareaTestID="create-hotel-description"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
