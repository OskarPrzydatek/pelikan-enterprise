import { OverviewList } from '~/components/organisms';
import { PageLayout } from '~/styles';

interface IHashtagOverviewTemplate {
  page?: string;
  onClickNavigate: () => void;
}

export const HashtagOverviewTemplate: React.FC<IHashtagOverviewTemplate> = ({
  page,
  onClickNavigate,
}: IHashtagOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        navigateLabel="Dodaj hashtag"
        noItemsLabel="Brak hashtagów w systemie"
        page={page}
        title="Hashtagi"
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
