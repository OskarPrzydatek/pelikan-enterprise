import { Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './Footer.styles';

interface IFooter extends IComponent {
  version: string;
}

export const Footer: React.FC<IFooter> = ({ version }: IFooter) => {
  return (
    <S.Footer>
      <Text dataTestID="app-version">Pelikan Business v{version}</Text>
    </S.Footer>
  );
};
