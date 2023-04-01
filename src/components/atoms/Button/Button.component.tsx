import { IComponent } from '~/models';

import * as S from './Button.styles';

interface IButton extends IComponent {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
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
