import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Body } from '~/Body';
import { Slugs } from '~/constants';
import {
  CreateAttractionPage,
  CreateHashtagPage,
  CreateHotelPage,
  CreateOfferPage,
  CreateTransportPage,
  Edit,
  List,
} from '~/pages';

export const router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      // Offer
      {
        element: <CreateOfferPage />,
        path: Slugs.CREATE_OFFER,
      },
      {
        element: <Edit />,
        path: Slugs.EDIT_OFFER,
      },
      {
        element: <List />,
        path: Slugs.LIST_OFFER,
        children: [
          {
            element: <List />,
            path: Slugs.PAGE,
          },
        ],
      },

      // Hotels
      {
        element: <CreateHotelPage />,
        path: Slugs.CREATE_HOTEL,
      },
      {
        element: <Edit />,
        path: Slugs.EDIT_HOTEL,
      },
      {
        element: <List />,
        path: Slugs.LIST_HOTEL,
        children: [
          {
            element: <List />,
            path: Slugs.PAGE,
          },
        ],
      },

      // Transport
      {
        element: <CreateTransportPage />,
        path: Slugs.CREATE_TRANSPORT,
      },
      {
        element: <Edit />,
        path: Slugs.EDIT_TRANSPORT,
      },
      {
        element: <List />,
        path: Slugs.LIST_TRANSPORT,
        children: [
          {
            element: <List />,
            path: Slugs.PAGE,
          },
        ],
      },

      // Attractions
      {
        element: <CreateAttractionPage />,
        path: Slugs.CREATE_ATTRACTION,
      },
      {
        element: <Edit />,
        path: Slugs.EDIT_ATTRACTION,
      },
      {
        element: <List />,
        path: Slugs.LIST_ATTRACTION,
        children: [
          {
            element: <List />,
            path: Slugs.PAGE,
          },
        ],
      },

      // Hashtags
      {
        element: <CreateHashtagPage />,
        path: Slugs.CREATE_HASHTAG,
      },
      {
        element: <Edit />,
        path: Slugs.EDIT_HASHTAG,
      },
      {
        element: <List />,
        path: Slugs.LIST_HASHTAG,
        children: [
          {
            element: <List />,
            path: Slugs.PAGE,
          },
        ],
      },
    ],
  },
  {
    element: <Navigate replace to={Slugs.CREATE_OFFER} />,
    path: Slugs.NOT_FOUND,
  },
]);
