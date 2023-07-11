import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Body } from '~/Body';
import { Slugs } from '~/constants';
import {
  CreateAttractionPage,
  CreateHashtagPage,
  CreateHotelPage,
  CreateOfferPage,
  CreateTransportPage,
  EditAttractionPage,
  EditHashtagPage,
  EditHotelPage,
  EditOfferPage,
  EditTransportPage,
  ListAttractionPage,
  ListHashtagPage,
  ListHotelPage,
  ListOfferPage,
  ListTransportPage,
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
        element: <EditOfferPage />,
        path: Slugs.EDIT_OFFER,
      },
      {
        element: <ListOfferPage />,
        path: Slugs.LIST_OFFER,
        children: [
          {
            element: <ListOfferPage />,
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
        element: <EditHotelPage />,
        path: Slugs.EDIT_HOTEL,
      },
      {
        element: <ListHotelPage />,
        path: Slugs.LIST_HOTEL,
        children: [
          {
            element: <ListHotelPage />,
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
        element: <EditTransportPage />,
        path: Slugs.EDIT_TRANSPORT,
      },
      {
        element: <ListTransportPage />,
        path: Slugs.LIST_TRANSPORT,
        children: [
          {
            element: <ListTransportPage />,
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
        element: <EditAttractionPage />,
        path: Slugs.EDIT_ATTRACTION,
      },
      {
        element: <ListAttractionPage />,
        path: Slugs.LIST_ATTRACTION,
        children: [
          {
            element: <ListAttractionPage />,
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
        element: <EditHashtagPage />,
        path: Slugs.EDIT_HASHTAG,
      },
      {
        element: <ListHashtagPage />,
        path: Slugs.LIST_HASHTAG,
        children: [
          {
            element: <ListHashtagPage />,
            path: Slugs.PAGE,
          },
        ],
      },
    ],
  },

  // Not Found
  {
    element: <Navigate replace to={Slugs.CREATE_OFFER} />,
    path: Slugs.NOT_FOUND,
  },
]);
