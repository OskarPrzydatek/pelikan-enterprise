import { Text } from '~/components/atoms';

import * as S from './DashboardTemplate.styles';

interface IDashboard {
  version: string;
}

export const DashboardTemplate: React.FC<IDashboard> = ({
  version,
}: IDashboard) => {
  return (
    <S.Main>
      <Text>Pelikan Business Template</Text>
      <Text dataTestID="app-version">v{version}</Text>
    </S.Main>
  );
};
