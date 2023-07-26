import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateOfferTemplate } from '~/components/templates';
import { IOffer } from '~/models';

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IOffer> = (data) => console.log(data);

  return (
    <CreateOfferTemplate
      createOfferFormMethods={methods}
      hotelOptions={[
        { value: 'HOTEL_A', label: 'Hotel A' },
        { value: 'HOTEL_B', label: 'Hotel B' },
        { value: 'HOTEL_C', label: 'Hotel C' },
      ]}
      transportOptions={[
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
      ]}
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
