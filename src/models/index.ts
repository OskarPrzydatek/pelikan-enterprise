import { FieldValues, RegisterOptions } from 'react-hook-form';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { RenderFieldEnum } from '~/components/organisms';

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
  registerOptions: RegisterOptions<FieldValues, string>;
  selectOptions?: { label: string; value: string }[];
}

export interface IFormMetadata {
  path: string;
  title: string;
  fields: IFieldMetadata[];
  submitLabel: string;
  selectOptions?: { label: string; value: string }[];
}
