import { Button, Header, Icon, Text } from '~/components/atoms';
import { Icons } from '~/constants';

import * as S from './OverviewList.styles';
import { OverviewListItem } from './OverviewListItem/OverviewListItem';

interface IOverviewList {
  title: string;
  items: { id: number; name: string }[];
  noItemsLabel: string;
  navigateLabel: string;
  page?: string;
  onClickItem: (id: number) => void;
  onClickNavigate: () => void;
}

export const OverviewList: React.FC<IOverviewList> = ({
  title,
  items,
  noItemsLabel,
  navigateLabel,
  page,
  onClickItem,
  onClickNavigate,
}: IOverviewList) => {
  const currentPage = page ?? '1';

  return (
    <S.OverviewList>
      <Header>{title}</Header>
      <S.OverviewListWrapper>
        {items.length > 0 ? (
          <>
            {items.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`overview-list-item-${id}`}
                name={name}
                onClickNavigate={() => onClickItem(id)}
              />
            ))}
          </>
        ) : (
          <li data-testid="no-items-label">
            <Text>{noItemsLabel}</Text>
          </li>
        )}
      </S.OverviewListWrapper>
      <S.Pagination>
        <Icon css={S.prevArrowCSS} icon={Icons.ARROW} onClick={() => {}} />
        <Text dataTestID="pagination-counter">{currentPage} / X</Text>
        <Icon css={S.nextArrowCSS} icon={Icons.ARROW} onClick={() => {}} />
      </S.Pagination>
      <Button css={S.navigateButtonCSS} onClick={onClickNavigate}>
        {navigateLabel}
      </Button>
    </S.OverviewList>
  );
};
