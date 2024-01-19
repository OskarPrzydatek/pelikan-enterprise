import React from 'react';

import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IHotelData, IOverviewTemplate } from '~/models';

interface IHotelOverviewTemplate extends IOverviewTemplate {
  data: IHotelData[] | undefined;
}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  data,
  page,
  isLoading,
  error,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IHotelOverviewTemplate) => {
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
  } = usePagination(data?.length!, page, Slugs.HOTEL_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hotel"
        noItemsLabel="Brak hoteli w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Hotele"
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
                  dataTestID={`hotel-overview-list-item-${id}`}
                  deleteIconTestID={`hotel-overview-delete-${id}`}
                  editIconTestID={`hotel-overview-edit-${id}`}
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
