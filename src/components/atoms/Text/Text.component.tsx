import { IComponent } from '~/models';

import * as S from './Text.styles';

interface IText extends IComponent {
  children: string | React.ReactNode;
}

export const Text: React.FC<IText> = ({ children, css, dataTestID }: IText) => {
  return (
    <S.Text css={css} data-testid={dataTestID}>
      {children}
    </S.Text>
  );
};
