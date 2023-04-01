import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import * as S from './Button.styles';

interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  dataTestID?: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  css,
  dataTestID,
  onClick,
}: IButton) => {
  return (
    <S.Button
      css={css}
      data-testid={dataTestID}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
