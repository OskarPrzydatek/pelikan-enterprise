import {
  createAttractionFormMetadata,
  createHotelFormMetadata,
  createHashtagFormMetadata,
  nonexistFormMeta,
  createTransportFormMetadata,
  createOfferFormMetadata,
} from '~/metadata';
import { IFormMetadata } from '~/models';

export const useFormMetadata = (path: string) => {
  switch (path) {
    case '/create-offer':
      return createOfferFormMetadata as IFormMetadata;
    case '/create-hashtag':
      return createHashtagFormMetadata as IFormMetadata;
    case '/create-attraction':
      return createAttractionFormMetadata as IFormMetadata;
    case '/create-hotel':
      return createHotelFormMetadata as IFormMetadata;
    case '/create-transport':
      return createTransportFormMetadata as IFormMetadata;
    default:
      return nonexistFormMeta as IFormMetadata;
  }
};
