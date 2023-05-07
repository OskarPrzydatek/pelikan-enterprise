import { Slugs } from '~/constants';
import { ISideMenuNavigationList } from '~/models';

export const sideMenuNavigationItemsMetadata: ISideMenuNavigationList[] = [
  {
    title: 'Oferty',
    items: [
      {
        path: 'create-offer' as Slugs,
        label: 'Dodaj ofertę',
      },
      {
        path: 'list-offer' as Slugs,
        label: 'Lista ofert',
      },
    ],
  },
  {
    title: 'Hotele',
    items: [
      {
        path: 'create-hotel' as Slugs,
        label: 'Dodaj hotel',
      },
      {
        path: 'list-hotel' as Slugs,
        label: 'Lista hoteli',
      },
    ],
  },
  {
    title: 'Transport',
    items: [
      {
        path: 'create-transport' as Slugs,
        label: 'Dodaj transport',
      },
      {
        path: 'list-transport' as Slugs,
        label: 'Lista transportów',
      },
    ],
  },
  {
    title: 'Atrakcje',
    items: [
      {
        path: 'create-attraction' as Slugs,
        label: 'Dodaj atrakcję',
      },
      {
        path: 'list-attraction' as Slugs,
        label: 'Lista atrakcji',
      },
    ],
  },
  {
    title: 'Hash Tagi',
    items: [
      {
        path: 'create-hashtag' as Slugs,
        label: 'Dodaj hashtag',
      },
      {
        path: 'list-hashtag' as Slugs,
        label: 'Lista hashtagów',
      },
    ],
  },
];
