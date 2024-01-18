import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { TextArea, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { IHotel } from '~/models';
import { PageLayout } from '~/styles';
import { requiredValidator, starsValidator } from '~/validators';

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
        <Row>
          <TextField
            errorMessageTestID="create-hotel-name-error"
            inputTestID="create-hotel-name"
            label="Nazwa hotelu"
            name="name"
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
        </Row>
        <TextField
          errorMessageTestID="create-hotel-stars-rating-error"
          inputTestID="create-hotel-stars-rating"
          label="Ilość gwiazdek"
          name="stars"
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
