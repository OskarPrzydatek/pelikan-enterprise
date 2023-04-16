import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { RenderFieldEnum } from '~/utils';

export interface IPage {
  title: string;
}

export interface IComponent {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export interface IFieldMetadata {
  type: RenderFieldEnum;
  name: string;
  label: string;
}

export interface IFormMetadata {
  path: string;
  title: string;
  fields: IFieldMetadata[];
  submitLabel: string;
}
