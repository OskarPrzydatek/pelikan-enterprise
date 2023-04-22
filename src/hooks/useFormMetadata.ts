import {
  createAttractionFormMetadata,
  createHotelFormMetadata,
  createHashtagFormMetadata,
  nonexistentFormMeta,
  createTransportFormMetadata,
} from '~/metadata';

export const useFormMetadata = (path: string) => {
  switch (path) {
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
