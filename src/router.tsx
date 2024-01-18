import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Body } from '~/Body';
import { Slugs } from '~/constants';
import {
  AttractionOverviewPage,
  CreateAttractionPage,
  CreateHashtagPage,
  CreateHotelPage,
  CreateOfferPage,
  CreateTransportPage,
  CreateUserPage,
  EditAttractionPage,
  EditHashtagPage,
  EditHotelPage,
  EditOfferPage,
  EditTransportPage,
  EditUserPage,
  HashtagOverviewPage,
  HotelOverviewPage,
  OfferOverviewPage,
  TransportOverviewPage,
  UsersOverviewPage,
} from '~/pages';

export const router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      // Offer
      {
        element: <OfferOverviewPage />,
        path: Slugs.OFFER_OVERVIEW,
        children: [
          {
            element: <OfferOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateOfferPage />,
        path: Slugs.CREATE_OFFER,
      },
      {
        element: <EditOfferPage />,
        path: `${Slugs.EDIT_OFFER}/${Slugs.ID}`,
      },

      // Hotels
      {
        element: <HotelOverviewPage />,
        path: Slugs.HOTEL_OVERVIEW,
        children: [
          {
            element: <HotelOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateHotelPage />,
        path: Slugs.CREATE_HOTEL,
      },
      {
        element: <EditHotelPage />,
        path: `${Slugs.EDIT_HOTEL}/${Slugs.ID}`,
      },

      // Transport
      {
        element: <TransportOverviewPage />,
        path: Slugs.TRANSPORT_OVERVIEW,
        children: [
          {
            element: <TransportOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateTransportPage />,
        path: Slugs.CREATE_TRANSPORT,
      },
      {
        element: <EditTransportPage />,
        path: `${Slugs.EDIT_TRANSPORT}/${Slugs.ID}`,
      },

      // Attractions
      {
        element: <AttractionOverviewPage />,
        path: Slugs.ATTRACTION_OVERVIEW,
        children: [
          {
            element: <AttractionOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateAttractionPage />,
        path: Slugs.CREATE_ATTRACTION,
      },
      {
        element: <EditAttractionPage />,
        path: `${Slugs.EDIT_ATTRACTION}/${Slugs.ID}`,
      },

      // Hashtags
      {
        element: <HashtagOverviewPage />,
        path: Slugs.HASHTAG_OVERVIEW,
        children: [
          {
            element: <HashtagOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateHashtagPage />,
        path: Slugs.CREATE_HASHTAG,
      },
      {
        element: <EditHashtagPage />,
        path: `${Slugs.EDIT_HASHTAG}/${Slugs.ID}`,
      },

      // Users
      {
        element: <UsersOverviewPage />,
        path: Slugs.USERS_OVERVIEW,
        children: [
          {
            element: <UsersOverviewPage />,
            path: Slugs.PAGE,
          },
        ],
      },
      {
        element: <CreateUserPage />,
        path: Slugs.CREATE_USER,
      },
      {
        element: <EditUserPage />,
        path: `${Slugs.EDIT_USER}/${Slugs.ID}`,
      },
    ],
  },

  // Not Found
  {
    element: <Navigate replace to={Slugs.OFFER_OVERVIEW} />,
    path: Slugs.NOT_FOUND,
  },
]);
