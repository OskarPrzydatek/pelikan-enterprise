import {
  attractionFormMetadata,
  hashtagFormMetadata,
  hotelFormMetadata,
  nonexistentFormMeta,
} from '~/metadata';

export const useFormMetadata = (path: string) => {
  switch (path) {
    case '/create-hashtag':
      return hashtagFormMetadata;
    case '/create-attraction':
      return attractionFormMetadata;
    case '/create-hotel':
      return hotelFormMetadata;
    default:
      return nonexistentFormMeta;
  }
};
