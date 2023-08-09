import useSWR from 'swr';

import { fetchGet } from '~/api';
import { Endpoints } from '~/constants';
import { IHotelData, ITransportData } from '~/models';

const useCachedHotels = () => {
  const { data, error, isLoading } = useSWR<IHotelData[], Error>(
    Endpoints.HOTELS_LIST,
    fetchGet
  );

  return {
    hotelsList: data,
    hotelsError: error,
    hotelsIsLoading: isLoading,
  };
};

const useCachedTransports = () => {
  const { data, error, isLoading } = useSWR<ITransportData[], Error>(
    Endpoints.TRANSPORTS_LIST,
    fetchGet
  );

  return {
    transportsList: data,
    transportsError: error,
    transportsIsLoading: isLoading,
  };
};

export const useCachedOfferResources = () => {
  const { hotelsList, hotelsError, hotelsIsLoading } = useCachedHotels();
  const { transportsList, transportsError, transportsIsLoading } =
    useCachedTransports();

  const resourcesError = hotelsError && transportsError;
  const resourcesIsLoading = hotelsIsLoading && transportsIsLoading;

  return { hotelsList, transportsList, resourcesError, resourcesIsLoading };
};
