import React from 'react';

import { Button, Header, Icon, Text } from '~/components/atoms';
import { Icons } from '~/constants';

import * as S from './OverviewList.styles';

interface IOverviewList {
  title: string;
  noItemsLabel: string;
  navigateLabel: string;
  numberOfPages: number;
  children?: React.ReactNode;
  page?: number;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  onClickNavigateToCreatePage?: () => void;
}

export const OverviewList: React.FC<IOverviewList> = ({
  title,
  noItemsLabel,
  navigateLabel,
  numberOfPages,
  children,
  page,
  onClickNextPage,
  onClickPrevPage,
  onClickNavigateToCreatePage,
}: IOverviewList) => {
  const itemsLength = React.Children.count(children);

  return (
    <S.OverviewListWrapper>
      <Header>{title}</Header>
      <S.OverviewList>
        {itemsLength > 0 ? (
          children
        ) : (
          <li data-testid="no-items-label">
            <Text>{noItemsLabel}</Text>
          </li>
        )}
      </S.OverviewList>
      <S.Pagination>
        <Icon
          css={S.prevArrowCSS}
          icon={Icons.ARROW}
          onClick={onClickPrevPage}
        />
        <Text dataTestID="pagination-counter">
          {page} / {numberOfPages}
        </Text>
        <Icon
          css={S.nextArrowCSS}
          icon={Icons.ARROW}
          onClick={onClickNextPage}
        />
      </S.Pagination>
      {onClickNavigateToCreatePage ? (
        <Button
          css={S.navigateButtonCSS}
          dataTestID="overview-list-navigate-to-create-page"
          onClick={onClickNavigateToCreatePage}
        >
          {navigateLabel}
        </Button>
      ) : null}
    </S.OverviewListWrapper>
  );
};
