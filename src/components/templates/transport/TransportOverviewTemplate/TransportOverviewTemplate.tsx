import React from 'react';

import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { useDeleteWithModal } from '~/hooks';
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

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj Transport"
        noItemsLabel="Brak transportów w systemie"
        page={page}
        title="Transport"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
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
