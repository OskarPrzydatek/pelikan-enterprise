export enum Icons {
  ARROW,
  CHEVRON,
  CLOSE,
  DELETE,
  EDIT,
  HAMBURGER,
}

export enum Slugs {
  ATTRACTION_OVERVIEW = 'attraction-overview',
  CREATE_ATTRACTION = 'create-attraction',
  EDIT_ATTRACTION = 'edit-attraction',

  HASHTAG_OVERVIEW = 'hashtag-overview',
  CREATE_HASHTAG = 'create-hashtag',
  EDIT_HASHTAG = 'edit-hashtag',

  HOTEL_OVERVIEW = 'hotel-overview',
  CREATE_HOTEL = 'create-hotel',
  EDIT_HOTEL = 'edit-hotel',

  OFFER_OVERVIEW = 'offer-overview',
  CREATE_OFFER = 'create-offer',
  EDIT_OFFER = 'edit-offer',

  TRANSPORT_OVERVIEW = 'transport-overview',
  CREATE_TRANSPORT = 'create-transport',
  EDIT_TRANSPORT = 'edit-transport',

  ID = ':id',
  PAGE = ':page',
  NOT_FOUND = '*',
}

export enum Endpoints {
  ATTRACTIONS_LIST = 'attractions/list',
  CREATE_ATTRACTION = 'attractions/add',

  HASHTAGS_LIST = 'hashtags/list',
  CREATE_HASHTAG = 'hashtags/add',

  HOTELS_LIST = 'hotels/list',
  CREATE_HOTEL = 'hotels/add',

  OFFERS_LIST = 'offers/list',
  CREATE_OFFER = 'offers/add',

  TRANSPORTS_LIST = 'transports/list',
  CREATE_TRANSPORT = 'transports/add',
  UPDATE_TRANSPORT = 'transport/update',
  DELETE_TRANSPORT = 'transport/deletee',
}

export const transportTypeOptions = [
  { value: 'PLANE', label: 'Samolot' },
  { value: 'BUS', label: 'Autobus' },
  { value: 'SHIP', label: 'Statek' },
];
