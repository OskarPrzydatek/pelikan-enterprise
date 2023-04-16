import { RenderFieldEnum } from '~/utils';

export const hotelFormMetadata = {
  path: '/create-hotel',
  title: 'Dodaj hotel',
  fields: [
    {
      type: RenderFieldEnum.TEXT_FIELD,
      name: 'hotelName',
      label: 'Nazwa hotelu',
    },
    {
      type: RenderFieldEnum.TEXT_FIELD,
      name: 'address',
      label: 'Adres',
    },
    {
      type: RenderFieldEnum.NUMERIC_FIELD,
      name: 'pricePerPerson',
      label: 'Cena od osoby',
    },
    {
      type: RenderFieldEnum.STAR_FIELD,
      name: 'starRating',
      label: 'Ilość gwiazdek',
    },
    {
      type: RenderFieldEnum.TEXT_AREA,
      name: 'description',
      label: 'Opis',
    },
  ],
  submitLabel: 'Dodaj hotel',
};

export const attractionFormMetadata = {
  path: '/create-attraction',
  title: 'Dodaj atrakcję',
  fields: [
    {
      type: RenderFieldEnum.TEXT_FIELD,
      name: 'attractionName',
      label: 'Nazwa atrakcji',
    },
    {
      type: RenderFieldEnum.NUMERIC_FIELD,
      name: 'price',
      label: 'Cena',
    },
    {
      type: RenderFieldEnum.TEXT_AREA,
      name: 'description',
      label: 'Opis',
    },
  ],
  submitLabel: 'Dodaj atrakcję',
};

export const hashtagFormMetadata = {
  path: '/create-hashtag',
  title: 'Dodaj hashtag',
  fields: [
    {
      type: RenderFieldEnum.TEXT_FIELD,
      name: 'hashtagName',
      label: 'Nazwa hashtagu',
    },
  ],
  submitLabel: 'Dodaj hashtag',
};

export const nonexistentFormMeta = {
  path: '',
  title: 'Taki formularz nie istnieje',
  fields: [],
  submitLabel: '',
};
