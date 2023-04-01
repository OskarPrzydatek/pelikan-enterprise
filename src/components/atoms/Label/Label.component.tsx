import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import * as S from './Label.styles';

interface ILabel {
  htmlFor: string;
  children: string;
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
}

export const Label: React.FC<ILabel> = ({
  htmlFor,
  children,
  css,
  dataTestID,
}: ILabel) => {
  return (
    <S.Label css={css} data-testid={dataTestID} htmlFor={htmlFor}>
      {children}
    </S.Label>
  );
};
