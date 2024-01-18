export interface IAttractionData {
  id: number;
  name: string;
  price: number;
  description: string;
  offer?: {
    id: number;
  };
}

export interface IHashtagData {
  id: number;
  name: string;
  offers?: {
    id: number;
  }[];
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
  quantity: number;
  transport: string;
  hotel: string;
}

export interface ITransportData {
  id: number;
  name: string;
  transportType: string;
  description: string;
}

export interface ITransportBody {
  name: string;
  transportType: string;
  destination: string;
}

export interface IUserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  userType: 'ADMIN' | 'WORKER';
}
