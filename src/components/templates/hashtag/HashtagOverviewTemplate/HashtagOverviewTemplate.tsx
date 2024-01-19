import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IHashtagData, IOverviewTemplate } from '~/models';

interface IHashtagOverviewTemplate extends IOverviewTemplate {
  data: IHashtagData[] | undefined;
}

export const HashtagOverviewTemplate: React.FC<IHashtagOverviewTemplate> = ({
  data,
  isLoading,
  error,
  page,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IHashtagOverviewTemplate) => {
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
  } = usePagination(data?.length!, page, Slugs.HASHTAG_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hashtag"
        noItemsLabel="Brak hashtagów w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Hashtagi"
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
                  dataTestID={`hashtag-overview-list-item-${id}`}
                  deleteIconTestID={`hashtag-overview-delete-${id}`}
                  editIconTestID={`hashtag-overview-edit-${id}`}
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
