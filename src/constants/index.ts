export enum Icons {
  ADD,
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
  ATTRACTION_BY_ID = 'attractions/get',
  CREATE_ATTRACTION = 'attractions/add',
  UPDATE_ATTRACTION = 'attractions/update',
  DELETE_ATTRACTION = 'attractions/delete',

  HASHTAGS_LIST = 'hashtags/list',
  HASHTAG_BY_ID = 'hashtags/get',
  CREATE_HASHTAG = 'hashtags/add',
  UPDATE_HASHTAG = 'hashtags/update',
  DELETE_HASHTAG = 'hashtags/delete',

  HOTELS_LIST = 'hotels/list',
  CREATE_HOTEL = 'hotels/add',
  UPDATE_HOTEL = 'hotels/update',
  DELETE_HOTEL = 'hotels/delete',

  OFFERS_LIST = 'offers/list',
  CREATE_OFFER = 'offers/add',
  UPDATE_OFFER = 'offers/update',
  DELETE_OFFER = 'offers/delete',

  TRANSPORTS_LIST = 'transports/list',
  CREATE_TRANSPORT = 'transports/add',
  UPDATE_TRANSPORT = 'transports/update',
  DELETE_TRANSPORT = 'transports/delete',
}

export const transportTypeOptions = [
  { value: 'PLANE', label: 'Samolot' },
  { value: 'BUS', label: 'Autobus' },
  { value: 'SHIP', label: 'Statek' },
];
