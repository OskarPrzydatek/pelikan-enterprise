import * as S from './Header.styles';

interface IHeder {
  children: string;
  dataTestID?: string;
}

export const Header: React.FC<IHeder> = ({ children, dataTestID }: IHeder) => {
  return <S.Header data-testid={dataTestID}>{children}</S.Header>;
};
