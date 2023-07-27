export enum Icons {
  ARROW,
  CHEVRON,
  CLOSE,
  DELETE,
  EDIT,
  HAMBURGER,
}

export enum Slugs {
  OFFER_OVERVIEW = 'offer-overview',
  CREATE_OFFER = 'create-offer',
  EDIT_OFFER = 'edit-offer',

  CREATE_ATTRACTION = 'create-attraction',
  ATTRACTION_OVERVIEW = 'attraction-overview',
  EDIT_ATTRACTION = 'edit-attraction/:id',

  HOTEL_OVERVIEW = 'hotel-overview',
  CREATE_HOTEL = 'create-hotel',
  EDIT_HOTEL = 'edit-hotel/:id',

  HASHTAG_OVERVIEW = 'hashtag-overview',
  CREATE_HASHTAG = 'create-hashtag',
  EDIT_HASHTAG = 'edit-hashtag/:id',

  TRANSPORT_OVERVIEW = 'transport-overview',
  CREATE_TRANSPORT = 'create-transport',
  EDIT_TRANSPORT = 'edit-transport/:id',

  ID = ':id',
  PAGE = ':page',
  NOT_FOUND = '*',
}
