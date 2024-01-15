import useSWR from 'swr';

import { fetchGet } from '~/api';
import { Endpoints } from '~/constants';
import { IAttractionData, IHotelData, ITransportData } from '~/models';

export const useCachedOfferResources = () => {
  const {
    data: hotelsList,
    error: hotelsError,
    isLoading: hotelsIsLoading,
  } = useSWR<IHotelData[], Error>(Endpoints.HOTELS_LIST, fetchGet);
  const {
    data: transportsList,
    error: transportsError,
    isLoading: transportsIsLoading,
  } = useSWR<ITransportData[], Error>(Endpoints.TRANSPORTS_LIST, fetchGet);
  const {
    data: attractionsList,
    error: attractionsError,
    isLoading: attractionsIsLoading,
  } = useSWR<IAttractionData[], Error>(Endpoints.ATTRACTIONS_LIST, fetchGet);
  const {
    data: hashtagsList,
    error: hashtagsError,
    isLoading: hashtagsIsLoading,
  } = useSWR<IAttractionData[], Error>(Endpoints.HASHTAGS_LIST, fetchGet);

  const resourcesError =
    hotelsError ?? transportsError ?? attractionsError ?? hashtagsError;
  const resourcesIsLoading =
    hotelsIsLoading &&
    transportsIsLoading &&
    attractionsIsLoading &&
    hashtagsIsLoading;

  return {
    attractionsList,
    hotelsList,
    transportsList,
    hashtagsList,
    resourcesError,
    resourcesIsLoading,
  };
};
