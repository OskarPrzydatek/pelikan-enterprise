import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateOfferTemplate } from '~/components/templates';

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

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IOffer> = (data) => console.log(data);

  return (
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
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
