import React from 'react';

import { Button, Header, Icon, Text } from '~/components/atoms';
import { Icons } from '~/constants';

import * as S from './OverviewList.styles';

interface IOverviewList {
  title: string;
  noItemsLabel: string;
  navigateLabel: string;
  children?: React.ReactNode;
  page?: string;
  onClickNavigateToCreatePage?: () => void;
}

export const OverviewList: React.FC<IOverviewList> = ({
  title,
  noItemsLabel,
  navigateLabel,
  children,
  page,
  onClickNavigateToCreatePage,
}: IOverviewList) => {
  const currentPage = page ?? '1';
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
      {page ? (
        <S.Pagination>
          <Icon css={S.prevArrowCSS} icon={Icons.ARROW} onClick={() => {}} />
          <Text dataTestID="pagination-counter">{currentPage} / X</Text>
          <Icon css={S.nextArrowCSS} icon={Icons.ARROW} onClick={() => {}} />
        </S.Pagination>
      ) : null}
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
