export const createOfferFormMetadata = {
  path: '/create-offer',
  title: 'Dodaj ofertę',
  submitLabel: 'Dodaj ofertę',
  fields: [
    {
      type: 'TEXT_FIELD',
      name: 'offerName',
      label: 'Nazwa oferty',
    },
    {
      type: 'NUMERIC_FIELD',
      name: 'price',
      label: 'Cena',
    },
    {
      type: 'NUMERIC_FIELD',
      name: 'numberOfTickets',
      label: 'Liczba miejsc',
    },
    {
      type: 'SELECT',
      name: 'transport',
      label: 'Transportu',
      selectOptions: [
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
        { value: 'TRANSPORT_C', label: 'Transport C' },
      ],
    },
    {
      type: 'SELECT',
      name: 'destination',
      label: 'Miejsce docelowe',
      selectOptions: [
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ],
    },
    {
      type: 'SELECT',
      name: 'hotel',
      label: 'Hotel',
      selectOptions: [
        { value: 'HOTEL_A', label: 'Hotel A' },
        { value: 'HOTEL_B', label: 'Hotel B' },
        { value: 'HOTEL_C', label: 'Hotel C' },
      ],
    },
    {
      type: 'DATE',
      name: 'from',
      label: 'Od',
    },
    {
      type: 'DATE',
      name: 'to',
      label: 'Do',
    },
    {
      type: 'TEXT_AREA',
      name: 'description',
      label: 'Opis oferty',
    },
  ],
};

export const createTransportFormMetadata = {
  path: '/create-transport',
  title: 'Dodaj transport',
  submitLabel: 'Dodaj transport',
  fields: [
    {
      type: 'TEXT_FIELD',
      name: 'transportCompanyName',
      label: 'Nazwa firmy transportowej',
    },
    {
      type: 'SELECT',
      name: 'transportKind',
      label: 'Rodzaj transportu',
      selectOptions: [
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
        { value: 'TRANSPORT_C', label: 'Transport C' },
      ],
    },
    {
      type: 'SELECT',
      name: 'from',
      label: 'Miejsce początkowe',
      selectOptions: [
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ],
    },
    {
      type: 'SELECT',
      name: 'to',
      label: 'Miejsce docelowe',
      selectOptions: [
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ],
    },
    {
      type: 'NUMERIC_FIELD',
      name: 'price',
      label: 'Cena od osoby',
    },
  ],
};

export const createHotelFormMetadata = {
  path: '/create-hotel',
  title: 'Dodaj hotel',
  submitLabel: 'Dodaj hotel',
  fields: [
    {
      type: 'TEXT_FIELD',
      name: 'hotelName',
      label: 'Nazwa hotelu',
    },
    {
      type: 'TEXT_FIELD',
      name: 'address',
      label: 'Adres',
    },
    {
      type: 'NUMERIC_FIELD',
      name: 'pricePerPerson',
      label: 'Cena od osoby',
    },
    {
      type: 'STAR_FIELD',
      name: 'starRating',
      label: 'Ilość gwiazdek',
    },
    {
      type: 'TEXT_AREA',
      name: 'description',
      label: 'Opis',
    },
  ],
};

export const createAttractionFormMetadata = {
  path: '/create-attraction',
  title: 'Dodaj atrakcję',
  submitLabel: 'Dodaj atrakcję',
  fields: [
    {
      type: 'TEXT_FIELD',
      name: 'attractionName',
      label: 'Nazwa atrakcji',
    },
    {
      type: 'NUMERIC_FIELD',
      name: 'price',
      label: 'Cena',
    },
    {
      type: 'TEXT_AREA',
      name: 'description',
      label: 'Opis',
    },
  ],
};

export const createHashtagFormMetadata = {
  path: '/create-hashtag',
  title: 'Dodaj hashtag',
  submitLabel: 'Dodaj hashtag',
  fields: [
    {
      type: 'TEXT_FIELD',
      name: 'hashtagName',
      label: 'Nazwa hashtagu',
    },
  ],
};

export const nonexistFormMeta = {
  path: '',
  title: 'Taki formularz nie istnieje',
  submitLabel: '',
  fields: [],
};
