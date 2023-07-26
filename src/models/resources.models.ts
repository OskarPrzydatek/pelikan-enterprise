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
  name: string;
  location: string;
  termFrom: Date;
  termTo: Date;
  price: number;
  destination: string;
  numberOfGuests: number;
  // Temp as string
  transport: string;
  hotel: string;
}

export interface ITransport {
  transportCompanyName: string;
  transportKind: string;
  from: string;
  to: string;
  price: number;
}
