import * as S from './Text.styles';

interface IText {
  children: string | React.ReactNode;
  dataTestID?: string;
}

export const Text: React.FC<IText> = ({ children, dataTestID }: IText) => {
  return <S.Text data-testid={dataTestID}>{children}</S.Text>;
};
