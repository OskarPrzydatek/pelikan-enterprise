import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateOfferTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { useCachedOfferResources } from '~/hooks/useCachedOfferResources/useCachedOfferResources';
import { IHotelData, IOffer, ITransportData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();
  const navigate = useNavigate();
  const { hotelsList, transportsList, resourcesError, resourcesIsLoading } =
    useCachedOfferResources();

  const mapHotelsToOptions = (data: IHotelData[]) => {
    if (hotelsList && transportsList) {
      return data.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  };

  const mapTransportsToOptions = (data: ITransportData[]) => {
    if (hotelsList && transportsList) {
      return data.map(({ id, transportType }) => ({
        value: id,
        label: transportType,
      }));
    }

    return [];
  };

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
      error={resourcesError}
      hotelOptions={mapHotelsToOptions(hotelsList!)}
      isLoading={resourcesIsLoading}
      transportOptions={mapTransportsToOptions(transportsList!)}
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
