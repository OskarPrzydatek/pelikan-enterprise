import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';

interface IHashtagOverviewTemplate extends IOverviewTemplate {}

export const HashtagOverviewTemplate: React.FC<IHashtagOverviewTemplate> = ({
  items,
  isLoading,
  error,
  page,
  onClickItem,
  onClickNavigate,
}: IHashtagOverviewTemplate) => {
  return (
    <PageLayout error={error} isLoading={isLoading}>
      <OverviewList
        items={items}
        navigateLabel="Dodaj hashtag"
        noItemsLabel="Brak hashtagów w systemie"
        page={page}
        title="Hashtagi"
        onClickItem={onClickItem}
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
