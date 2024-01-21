import React from 'react';

import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IOverviewTemplate, ITransportData } from '~/models';

interface ITransportOverviewTemplate extends IOverviewTemplate {
  data: ITransportData[] | undefined;
}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({
  data,
  isLoading,
  error,
  page,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: ITransportOverviewTemplate) => {
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
  } = usePagination(data?.length!, page, Slugs.TRANSPORT_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj transport"
        noItemsLabel="Brak transportów w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Transport"
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
                  dataTestID={`transport-overview-list-item-${id}`}
                  deleteIconTestID={`transport-overview-delete-${id}`}
                  editIconTestID={`transport-overview-edit-${id}`}
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
