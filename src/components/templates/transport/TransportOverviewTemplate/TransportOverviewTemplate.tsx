import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';

interface ITransportOverviewTemplate extends IOverviewTemplate {}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({
  items,
  isLoading,
  error,
  page,
  onClickItem,
  onClickNavigate,
}: ITransportOverviewTemplate) => {
  return (
    <PageLayout error={error} isLoading={isLoading}>
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
