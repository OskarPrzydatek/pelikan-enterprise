import { Text } from '~/components/atoms';

import * as S from './Footer.styles';

interface IFooter {
  version: string;
}

export const Footer: React.FC<IFooter> = ({ version }: IFooter) => {
  return (
    <S.Footer>
      <Text dataTestID="app-version">v{version}</Text>
    </S.Footer>
  );
};
