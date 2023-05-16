import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { Slugs } from '~/constants';

export interface IComponent {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISideMenuNavigationListItem {
  path: Slugs;
  label: string;
}

export interface ISideMenuNavigationList {
  title: string;
  items: ISideMenuNavigationListItem[];
}
