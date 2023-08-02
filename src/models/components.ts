import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export interface IComponent {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export interface Item {
  id: number;
  name: string;
}

export interface IOverviewTemplate {
  isLoading: boolean;
  error: Error | undefined;
  page?: string;
  onClickItem: (id: number) => void;
  onClickNavigate: () => void;
}

export interface ISelectOption {
  label: string;
  value: string;
}
