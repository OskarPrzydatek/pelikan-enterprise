import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { Fields, Slugs } from '~/constants';

export interface IPage {
  title: string;
}

export interface IComponent {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export interface ICSS {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export interface SelectOption {
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

export interface IFieldMetadata {
  type: Fields;
  name: string;
  label: string;
  selectOptions?: SelectOption[];
}

export interface IFormMetadata {
  path: string;
  title: string;
  fields: IFieldMetadata[];
  submitLabel: string;
}
