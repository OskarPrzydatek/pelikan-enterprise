import { Header } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './Form.styles';

interface IForm extends IComponent {
  title: string;
  submitLabel: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

export const Form: React.FC<IForm> = ({
  title,
  submitLabel,
  children,
  onSubmit,
}: IForm) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <Header>{title}</Header>
      {children}
      <S.SubmitButton type="submit" value={submitLabel} />
    </S.Form>
  );
};
