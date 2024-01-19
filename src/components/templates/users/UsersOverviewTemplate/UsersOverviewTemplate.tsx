import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { ErrorBundaryLoader, OverviewList } from '~/components/organisms';
import { Slugs } from '~/constants';
import { useDeleteWithModal, usePagination } from '~/hooks';
import { IOverviewTemplate } from '~/models';
import { IUserData } from '~/models/data';

interface IUsersOverviewTemplate extends IOverviewTemplate {
  data: IUserData[] | undefined;
}

export const UsersOverviewTemplate: React.FC<IUsersOverviewTemplate> = ({
  data,
  isLoading,
  error,
  page,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IUsersOverviewTemplate) => {
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
  } = usePagination(data?.length!, page, Slugs.USERS_OVERVIEW);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj Użytkownika"
        noItemsLabel="Brak Użytkowników w systemie"
        numberOfPages={numberOfPages}
        page={currentPage}
        title="Users"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
      >
        {isArray(data)
          ? data
              .slice(paginationStart, paginationEnd)
              .map(({ id, firstName, lastName }) => (
                <OverviewListItem
                  key={`${id}-${firstName}-${lastName}`}
                  dataTestID={`users-overview-list-item-${id}`}
                  deleteIconTestID={`users-overview-delete-${id}`}
                  editIconTestID={`users-overview-edit-${id}`}
                  id={id}
                  name={`${firstName} ${lastName}`}
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
