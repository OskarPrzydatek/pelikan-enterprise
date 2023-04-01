import { IComponent } from '~/models';

import * as S from './Label.styles';

interface ILabel extends IComponent {
  htmlFor: string;
  children: React.ReactNode;
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
