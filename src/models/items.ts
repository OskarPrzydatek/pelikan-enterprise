export interface IAttractionItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface IHashtagItem {
  id: number;
  name: string;
}

export interface IHotelItem {
  id: number;
  name: string;
  address: string;
  stars: number;
  description: string;
}

export interface IOfferItem {
  id: number;
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

export interface ITransportItem {
  id: number;
  name: string;
  transportType: string;
  destination: string;
}
