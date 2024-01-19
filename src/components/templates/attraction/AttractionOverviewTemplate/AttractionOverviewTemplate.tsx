import React from 'react';

import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IAttractionData, IOverviewTemplate } from '~/models';

interface IAttractionOverviewTemplate extends IOverviewTemplate {
  data: IAttractionData[] | undefined;
}

export const AttractionOverviewTemplate: React.FC<
  IAttractionOverviewTemplate
> = ({
  data,
  page,
  isLoading,
  error,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IAttractionOverviewTemplate) => {
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
  } = usePagination(data?.length!, page, Slugs.ATTRACTION_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Atrakcje"
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
                  dataTestID={`attraction-overview-list-item-${id}`}
                  deleteIconTestID={`attraction-overview-delete-${id}`}
                  editIconTestID={`attraction-overview-edit-${id}`}
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
