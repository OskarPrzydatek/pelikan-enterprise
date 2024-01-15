import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import { TextArea, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { IHotel } from '~/models';
import { requiredValidator, starsValidator } from '~/validators';

interface IEditHotelTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editHotelFormMethods: UseFormReturn<IHotel>;
  onSubmitEditHotel: () => void;
}

export const EditHotelTemplate: React.FC<IEditHotelTemplate> = ({
  isLoading,
  error,
  editHotelFormMethods,
  onSubmitEditHotel,
}: IEditHotelTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editHotelFormMethods}
        submitLabel="Edytuj"
        title="Edytuj hotel"
        onSubmit={onSubmitEditHotel}
      >
        <Row>
          <TextField
            errorMessageTestID="edit-hotel-name-error"
            inputTestID="edit-hotel-name"
            label="Nazwa hotelu"
            name="name"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <TextField
            errorMessageTestID="edit-hotel-address-error"
            inputTestID="edit-hotel-address"
            label="Adres"
            name="address"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <TextField
          errorMessageTestID="edit-hotel-stars-rating-error"
          inputTestID="edit-hotel-stars-rating"
          label="Ilość gwiazdek"
          name="stars"
          registerOptions={{
            ...starsValidator,
          }}
        />
        <TextArea
          errorMessageTestID="edit-hotel-description-error"
          label="Opis"
          name="description"
          textareaTestID="edit-hotel-description"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </ErrorBundaryLoader>
  );
};
