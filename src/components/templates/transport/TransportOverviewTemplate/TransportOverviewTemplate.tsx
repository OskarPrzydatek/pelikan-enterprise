import { OverviewList } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';
import { PageLayout } from '~/styles';

interface ITransportOverviewTemplate extends IOverviewTemplate {}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({
  items,
  page,
  onClickItem,
  onClickNavigate,
}: ITransportOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        items={items}
        navigateLabel="Dodaj Transport"
        noItemsLabel="Brak transportów w systemie"
        page={page}
        title="Transport"
        onClickItem={onClickItem}
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
