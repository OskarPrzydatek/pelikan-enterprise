import { OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
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

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hashtag"
        noItemsLabel="Brak hashtagów w systemie"
        page={page}
        title="Hashtagi"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                dataTestID={`hashtag-overview-list-item-${id}`}
                deleteIconTestID={`hashtag-overview-delete-${id}`}
                editIconTestID={`hashtag-overview-edit-${id}`}
                id={id}
                name={name}
                onClickDelete={onClickDelete}
                onClickEdit={onClickEdit}
              />
            ))
          : null}
      </OverviewList>
    </ErrorBundaryLoader>
  );
};
