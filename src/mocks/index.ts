import { IOfferData } from '~/models';

export const attractionDataMock = [
  {
    id: 1,
    name: 'AttractiONe',
    price: 50,
    description: 'Explore the wonders of nature!',
  },
  {
    id: 2,
    name: 'AdventuraLand',
    price: 75,
    description: 'Embark on thrilling adventures!',
  },
  {
    id: 3,
    name: 'WonderWorld',
    price: 60,
    description: 'Discover magical places beyond imagination!',
  },
  {
    id: 4,
    name: 'ExoticEscape',
    price: 100,
    description: 'Experience the beauty of faraway lands!',
  },
  {
    id: 5,
    name: 'HistoryJourney',
    price: 40,
    description: 'Uncover the secrets of ancient civilizations!',
  },
];

export const hashtagDataMock = [
  {
    id: 1,
    name: 'Travel',
  },
  {
    id: 2,
    name: 'Adventure',
  },
  {
    id: 3,
    name: 'Explore',
  },
  {
    id: 4,
    name: 'Nature',
  },
  {
    id: 5,
    name: 'Wanderlust',
  },
];

export const hotelDataMock = [
  {
    id: 1,
    name: 'Luxury Resort',
    address: '123 Beachfront Avenue, Paradise City',
    stars: 5,
    description:
      'Indulge in luxury and relaxation at our exquisite beachfront resort.',
  },
  {
    id: 2,
    name: 'Cozy Inn',
    address: '456 Tranquil Street, Serenity Town',
    stars: 3,
    description: 'Experience warm hospitality and comfort at our charming inn.',
  },
  {
    id: 3,
    name: 'Mountain Retreat',
    address: '789 Scenic Road, Nature Valley',
    stars: 4,
    description:
      'Escape to the mountains and immerse yourself in breathtaking views.',
  },
  {
    id: 4,
    name: 'City View Hotel',
    address: '101 Downtown Boulevard, Urban City',
    stars: 4,
    description:
      'Stay in the heart of the city and enjoy stunning skyline views.',
  },
  {
    id: 5,
    name: 'Rustic Lodge',
    address: '222 Woodsy Trail, Wilderness Village',
    stars: 2,
    description:
      'Embrace the rustic charm and tranquility of our lodge in the woods.',
  },
];

export const offerDataMock = [
  {
    id: 1,
    name: 'Exotic Escape',
    location: 'Tropical Island',
    termFrom: new Date('2023-08-15'),
    termTo: new Date('2023-08-30'),
    price: 2000,
    destination: 'Relaxing Paradise Resort',
    numberOfGuests: 2,
    transport: 'Flight',
    hotel: 'Luxury Beachfront Villa',
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    location: 'Snowy Mountains',
    termFrom: new Date('2023-09-10'),
    termTo: new Date('2023-09-20'),
    price: 1500,
    destination: 'Ski Lodge Retreat',
    numberOfGuests: 4,
    transport: 'Car',
    hotel: 'Cozy Mountain Chalet',
  },
  {
    id: 3,
    name: 'City Explorer',
    location: 'Cosmopolitan City',
    termFrom: new Date('2023-10-05'),
    termTo: new Date('2023-10-12'),
    price: 1200,
    destination: 'Downtown Urban Hotel',
    numberOfGuests: 1,
    transport: 'Train',
    hotel: 'City View Suite',
  },
  {
    id: 4,
    name: 'Nature Retreat',
    location: 'Serene Forest',
    termFrom: new Date('2023-11-18'),
    termTo: new Date('2023-11-25'),
    price: 800,
    destination: 'Rustic Cabin Hideaway',
    numberOfGuests: 3,
    transport: 'Bus',
    hotel: 'Nature Lodge',
  },
  {
    id: 5,
    name: 'Family Fun',
    location: 'Beachside Resort',
    termFrom: new Date('2023-12-20'),
    termTo: new Date('2024-01-02'),
    price: 2500,
    destination: 'Family-Friendly Beach Resort',
    numberOfGuests: 5,
    transport: 'Flight',
    hotel: 'Family Suite',
  },
] as IOfferData[];

export const transportDataMock = [
  {
    id: 1,
    name: 'Emirates',
    transportType: 'PLANE',
    destination: 'Expensive but exclusive',
  },
  {
    id: 2,
    name: 'Rayanair',
    transportType: 'PLANE',
    destination: 'Cheep but poor',
  },
  {
    id: 3,
    name: 'City Hopper Bus',
    transportType: 'BUS',
    destination: 'Cosmopolitan City Buss',
  },
  {
    id: 4,
    name: 'Stenaline',
    transportType: 'SHIP',
    destination: 'Expensive but exclusive',
  },
  {
    id: 5,
    name: 'Polferis',
    transportType: 'SHIP',
    destination: 'Cheep but poor',
  },
];
