import { useForm } from 'react-hook-form';

import { CreateOfferTemplate } from '~/components/templates';
import { IOffer } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateOfferTemplateHelper {
  onSubmitCreateOffer: () => void;
}

export const CreateOfferTemplateHelper: React.FC<
  ICreateOfferTemplateHelper
> = ({ onSubmitCreateOffer }: ICreateOfferTemplateHelper) => {
  const methods = useForm<IOffer>();

  return (
    <StyledComponentsProvider>
      <CreateOfferTemplate
        createOfferFormMethods={methods}
        destinationOptions={[
          { value: 'PLACE_A', label: 'Miejsce A' },
          { value: 'PLACE_B', label: 'Miejsce B' },
        ]}
        hotelOptions={[
          { value: 'HOTEL_A', label: 'Hotel A' },
          { value: 'HOTEL_B', label: 'Hotel B' },
          { value: 'HOTEL_C', label: 'Hotel C' },
        ]}
        onSubmitCreateOffer={onSubmitCreateOffer}
      />
    </StyledComponentsProvider>
  );
};
