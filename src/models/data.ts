export interface IAttractionData {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface IHashtagData {
  id: number;
  name: string;
}

export interface IHotelData {
  id: number;
  name: string;
  address: string;
  stars: number;
  description: string;
}

export interface IOfferData {
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

export interface ITransportData {
  id: number;
  name: string;
  transportType: string;
  destination: string;
}
