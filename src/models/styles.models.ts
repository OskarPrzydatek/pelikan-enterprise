import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export interface ICSS {
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
