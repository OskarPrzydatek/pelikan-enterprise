import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateOfferTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IOffer } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IOffer> = async (data) => {
    const response = await fetchPost<IOffer>(Endpoints.CREATE_OFFER, data);

    if (response.ok) {
      successNotification('Oferta dodana pomyślnie');
      navigate(`/${Slugs.OFFER_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateOfferTemplate
      createOfferFormMethods={methods}
      hotelOptions={[
        { value: '1', label: 'Hotel A' },
        { value: '2', label: 'Hotel B' },
        { value: '3', label: 'Hotel C' },
      ]}
      transportOptions={[
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
      ]}
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
