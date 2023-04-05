import { Paths } from '~/router';

interface ISideMenuNavigationItem {
  path: Paths;
  label: string;
}

export interface ISideMenuNavigationSection {
  title: string;
  items: ISideMenuNavigationItem[];
}

export const sideMenuNavigationItemsMetadata: ISideMenuNavigationSection[] = [
  {
    title: 'Oferty',
    items: [
      {
        path: 'create-offer' as Paths,
        label: 'Dodaj ofertę',
      },
      {
        path: 'list-offer' as Paths,
        label: 'Lista ofert',
      },
    ],
  },
  {
    title: 'Hotele',
    items: [
      {
        path: 'create-hotel' as Paths,
        label: 'Dodaj hotel',
      },
      {
        path: 'list-hotel' as Paths,
        label: 'Lista hoteli',
      },
    ],
  },
  {
    title: 'Transport',
    items: [
      {
        path: 'create-transport' as Paths,
        label: 'Dodaj transport',
      },
      {
        path: 'list-transport' as Paths,
        label: 'Lista transportów',
      },
    ],
  },
  {
    title: 'Atrakcje',
    items: [
      {
        path: 'create-attraction' as Paths,
        label: 'Dodaj atrakcję',
      },
      {
        path: 'list-attraction' as Paths,
        label: 'Lista atrakcji',
      },
    ],
  },
  {
    title: 'Hash Tagi',
    items: [
      {
        path: 'create-hashtag' as Paths,
        label: 'Dodaj hashtag',
      },
      {
        path: 'list-hashtag' as Paths,
        label: 'Lista hashtagów',
      },
    ],
  },
];
