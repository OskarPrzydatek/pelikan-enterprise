import { RenderFieldEnum } from '~/utils';

export const createTransportFormMetadata = {
  path: '/create-transport',
  title: 'Dodaj transport',
  fields: [
    {
      type: RenderFieldEnum.TEXT_FIELD,
      name: 'transportCompanyName',
      label: 'Nazwa firmy transportowej',
    },
    {
      type: RenderFieldEnum.SELECT,
      name: 'transportKind',
      label: 'Rodzaj transportu',
      selectOptions: [
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
        { value: 'TRANSPORT_C', label: 'Transport C' },
      ],
    },
    {
      type: RenderFieldEnum.SELECT,
      name: 'from',
      label: 'Miejsce początkowe',
      selectOptions: [
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ],
    },
    {
      type: RenderFieldEnum.SELECT,
      name: 'to',
      label: 'Miejsce docelowe',
      selectOptions: [
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ],
    },
    {
      type: RenderFieldEnum.NUMERIC_FIELD,
      name: 'price',
      label: 'Cena od osoby',
    },
  ],
  submitLabel: 'Dodaj transport',
};

export const createHotelFormMetadata = {
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

export const createAttractionFormMetadata = {
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

export const createHashtagFormMetadata = {
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
