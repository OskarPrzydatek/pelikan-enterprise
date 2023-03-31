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
        label: 'Dodaj Ofertę',
      },
      {
        path: 'list-offer' as Paths,
        label: 'Lista Ofert',
      },
    ],
  },
  {
    title: 'Hotele',
    items: [
      {
        path: 'create-hotel' as Paths,
        label: 'Dodaj Hotel',
      },
      {
        path: 'list-hotel' as Paths,
        label: 'Lista Hoteli',
      },
    ],
  },
  {
    title: 'Transport',
    items: [
      {
        path: 'create-transport' as Paths,
        label: 'Dodaj Transport',
      },
      {
        path: 'list-transport' as Paths,
        label: 'Lista Transportów',
      },
    ],
  },
  {
    title: 'Atrakcje',
    items: [
      {
        path: 'create-attraction' as Paths,
        label: 'Dodaj Atrakcję',
      },
      {
        path: 'list-attraction' as Paths,
        label: 'Lista Atrakcji',
      },
    ],
  },
  {
    title: 'Hash Tagi',
    items: [
      {
        path: 'create-hashtag' as Paths,
        label: 'Dodaj Hash Tag',
      },
      {
        path: 'list-hashtag' as Paths,
        label: 'Lista Hash Tagów',
      },
    ],
  },
];
