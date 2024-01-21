import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditOfferTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { useCachedOfferResources } from '~/hooks';
import { IHotelData, IOffer, IOfferData, ITransportData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const EditOfferPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hotelsList, transportsList, resourcesError, resourcesIsLoading } =
    useCachedOfferResources();
  const { data, error, isLoading } = useSWR<IOfferData, Error>(
    `${Endpoints.OFFER_BY_ID}/${id!}`,
    fetchGet
  );

  const createDateTimeFromArray = (dateArray?: number[]) => {
    if (dateArray) {
      const year = dateArray[0];
      const month = dateArray[1] < 10 ? `0${dateArray[1]}` : dateArray[1];
      const day = dateArray[2] < 10 ? `0${dateArray[2]}` : dateArray[2];

      return `${year}-${month}-${day}`;
    }

    return null;
  };

  const methods = useForm<IOffer>({
    values: {
      name: data?.name!,
      location: data?.location!,
      termFrom: createDateTimeFromArray(
        data?.termFrom as unknown as number[]
      ) as unknown as Date,
      termTo: createDateTimeFromArray(
        data?.termTo as unknown as number[]
      ) as unknown as Date,
      price: data?.price!,
      quantity: data?.quantity!,
      transport: { id: data?.transport.id } as IOffer['transport'],
      hotel: { id: data?.hotel.id } as IOffer['hotel'],
      description: data?.description!,
    },
  });

  const mapHotelsToOptions = (data: IHotelData[]) => {
    if (hotelsList) {
      return data.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  };

  const mapTransportsToOptions = (data: ITransportData[]) => {
    if (transportsList) {
      return data.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  };

  const onSubmit = async (data: IOffer) => {
    const body = {
      id,
      ...data,
    };

    const response = await fetchPut<IOffer>(
      `${Endpoints.UPDATE_OFFER}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Oferta zaktualizowano pomyślnie');
      navigate(`/${Slugs.OFFER_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditOfferTemplate
      editOfferFormMethods={methods}
      error={resourcesError && error}
      hotelOptions={mapHotelsToOptions(hotelsList!)}
      isLoading={resourcesIsLoading && isLoading}
      transportOptions={mapTransportsToOptions(transportsList!)}
      onSubmitEditOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
