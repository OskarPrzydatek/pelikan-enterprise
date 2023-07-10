import { IComponent } from '~/models';

import * as S from './Header.styles';

interface IHeder extends IComponent {
  children: React.ReactNode;
}

export const Header: React.FC<IHeder> = ({ children, dataTestID }: IHeder) => {
  return <S.Header data-testid={dataTestID}>{children}</S.Header>;
};
