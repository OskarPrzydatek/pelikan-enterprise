import { IComponent } from '~/models';

import * as S from './Header.styles';

interface IHeder extends IComponent {
  children: React.ReactNode;
}

export const Header: React.FC<IHeder> = ({
  css,
  children,
  dataTestID,
}: IHeder) => {
  return (
    <S.Header css={css} data-testid={dataTestID}>
      {children}
    </S.Header>
  );
};
