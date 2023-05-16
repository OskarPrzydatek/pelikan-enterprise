export interface IAttraction {
  attractionName: string;
  price: number;
  description: string;
}

export interface IHashtag {
  hashtagName: string;
}

export interface IHotel {
  hotelName: string;
  address: string;
  pricePerPerson: number;
  starRating: number;
  description: string;
}

export interface IOffer {
  offerName: string;
  price: number;
  numberOfTickets: number;
  transport: string;
  destination: string;
  hotel: string;
  from: Date;
  to: Date;
  description: string;
}

export interface ITransport {
  transportCompanyName: string;
  transportKind: string;
  from: string;
  to: string;
  price: number;
}
