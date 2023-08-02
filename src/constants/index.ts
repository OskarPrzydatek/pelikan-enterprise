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
  HASHTAGS_LIST = 'hashtags/list',
  HOTELS_LIST = 'hotels/list',
  OFFERS_LIST = 'offers/list',
  TRANSPORTS_LIST = 'transports/list',
}
