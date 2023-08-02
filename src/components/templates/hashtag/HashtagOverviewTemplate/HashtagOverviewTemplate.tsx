import { OverviewList } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';
import { PageLayout } from '~/styles';

interface IHashtagOverviewTemplate extends IOverviewTemplate {}

export const HashtagOverviewTemplate: React.FC<IHashtagOverviewTemplate> = ({
  items,
  page,
  onClickItem,
  onClickNavigate,
}: IHashtagOverviewTemplate) => {
  return (
    <PageLayout>
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
