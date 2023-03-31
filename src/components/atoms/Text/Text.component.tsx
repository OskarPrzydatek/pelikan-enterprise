import * as S from './Text.styles';

interface IText {
  children: string | React.ReactNode;
  style?: React.CSSProperties | undefined;
  dataTestID?: string;
}

export const Text: React.FC<IText> = ({
  children,
  style,
  dataTestID,
}: IText) => {
  return (
    <S.Text data-testid={dataTestID} style={style}>
      {children}
    </S.Text>
  );
};
