import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import * as S from './Text.styles';

interface IText {
  children: string | React.ReactNode;
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export const Text: React.FC<IText> = ({ children, css, dataTestID }: IText) => {
  return (
    <S.Text css={css} data-testid={dataTestID}>
      {children}
    </S.Text>
  );
};
