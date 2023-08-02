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
  onClickItem,
  onClickNavigate,
}: IHashtagOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hashtag"
        noItemsLabel="Brak hashtagów w systemie"
        page={page}
        title="Hashtagi"
        onClickNavigate={onClickNavigate}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`hashtag-overview-list-item-${id}`}
                name={name}
                onClickNavigate={() => onClickItem(id)}
              />
            ))
          : null}
      </OverviewList>
    </ErrorBundaryLoader>
  );
};
