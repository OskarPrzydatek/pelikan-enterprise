import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { FieldType } from '~/constants';

export interface IPage {
  title: string;
}

export interface IComponent {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface IFieldMetadata {
  type: FieldType;
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
