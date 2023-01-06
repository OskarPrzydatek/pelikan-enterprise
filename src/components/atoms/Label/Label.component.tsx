import * as S from './Label.styles';

interface ILabel {
  htmlFor: string;
  children: string;
  dataTestID?: string;
}

export const Label: React.FC<ILabel> = ({
  htmlFor,
  children,
  dataTestID,
}: ILabel) => {
  return (
    <S.Label data-testid={dataTestID} htmlFor={htmlFor}>
      {children}
    </S.Label>
  );
};
