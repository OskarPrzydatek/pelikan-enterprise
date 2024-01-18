import { Text } from '~/components/atoms';
import { Modal, OverviewListItem } from '~/components/molecules';
import { ErrorBundaryLoader, OverviewList } from '~/components/organisms';
import { useDeleteWithModal } from '~/hooks';
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

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj Użytkownika"
        noItemsLabel="Brak Użytkowników w systemie"
        page={page}
        title="Users"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, firstName, lastName }) => (
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
