export interface IAttraction {
  name: string;
  price: number;
  description: string;
}

export interface IHashtag {
  name: string;
}

export interface IHotel {
  name: string;
  address: string;
  stars: number;
  description: string;
}

export interface IOffer {
  name: string;
  location: string;
  termFrom: Date;
  termTo: Date;
  price: number;
  quantity: number;
  transport: { id: number };
  hotel: { id: number };
}

export interface ITransport {
  name: string;
  transportType: string;
  destination: string;
}
