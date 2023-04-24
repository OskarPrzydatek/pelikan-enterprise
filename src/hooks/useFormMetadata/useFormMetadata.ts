import {
  createAttractionFormMetadata,
  createHotelFormMetadata,
  createHashtagFormMetadata,
  nonexistentFormMeta,
  createTransportFormMetadata,
  createOfferFormMetadata,
} from '~/metadata';

export const useFormMetadata = (path: string) => {
  switch (path) {
    case '/create-offer':
      return createOfferFormMetadata;
    case '/create-hashtag':
      return createHashtagFormMetadata;
    case '/create-attraction':
      return createAttractionFormMetadata;
    case '/create-hotel':
      return createHotelFormMetadata;
    case '/create-transport':
      return createTransportFormMetadata;
    default:
      return nonexistentFormMeta;
  }
};
