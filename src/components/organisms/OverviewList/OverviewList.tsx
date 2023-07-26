import { Button, Header, Text } from '~/components/atoms';

import * as S from './OverviewList.styles';

interface IOverviewList {
  title: string;
  noItemsLabel: string;
  page?: string;
  navigateLabel: string;
  onClickNavigate: () => void;
}

export const OverviewList: React.FC<IOverviewList> = ({
  title,
  noItemsLabel,
  page,
  navigateLabel,
  onClickNavigate,
}: IOverviewList) => {
  const currentPage = page ?? '1';

  return (
    <S.OverviewList>
      <Header>{title}</Header>
      <S.OverviewListWrapper>
        <li>
          <Text>{noItemsLabel}</Text>
        </li>
      </S.OverviewListWrapper>
      <S.Pagination>
        <Text dataTestID="pagination-counter">{currentPage} / X</Text>
      </S.Pagination>
      <Button css={S.navigateButtonCSS} onClick={onClickNavigate}>
        {navigateLabel}
      </Button>
    </S.OverviewList>
  );
};