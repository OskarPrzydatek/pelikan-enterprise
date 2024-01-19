import React from 'react';

import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IOfferData, IOverviewTemplate } from '~/models';

interface IOfferOverviewTemplate extends IOverviewTemplate {
  data: IOfferData[] | undefined;
}

export const OfferOverviewTemplate: React.FC<IOfferOverviewTemplate> = ({
  data,
  page,
  isLoading,
  error,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IOfferOverviewTemplate) => {
  const { isArray } = Array;
  const {
    showModal,
    handleItemIdBeforeDelete,
    onClickAcceptedDelete,
    onClickCloseModale,
  } = useDeleteWithModal(onClickDelete);
  const {
    currentPage,
    numberOfPages,
    paginationStart,
    paginationEnd,
    onClickNextPage,
    onClickPrevPage,
  } = usePagination(data?.length!, page, Slugs.OFFER_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj ofertę"
        noItemsLabel="Brak ofert w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Oferty"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
      >
        {isArray(data)
          ? data
              .slice(paginationStart, paginationEnd)
              .map(({ id, name }) => (
                <OverviewListItem
                  key={`${id}-${name}`}
                  dataTestID={`offer-overview-list-item-${id}`}
                  deleteIconTestID={`offer-overview-delete-${id}`}
                  editIconTestID={`offer-overview-edit-${id}`}
                  id={id}
                  name={name}
                  onClickDelete={handleItemIdBeforeDelete}
                  onClickEdit={onClickEdit}
                />
              ))
          : null}
      </OverviewList>
      {showModal ? (
        <Modal
          acceptLabel="Usuń!"
          onClickAccept={onClickAcceptedDelete}
          onClickClose={onClickCloseModale}
        >
          <Text>Czy napewno usunąć element z listy?</Text>
        </Modal>
      ) : null}
    </ErrorBundaryLoader>
  );
};
