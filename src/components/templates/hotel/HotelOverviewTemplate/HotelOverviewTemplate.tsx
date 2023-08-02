import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';

interface IHotelOverviewTemplate extends IOverviewTemplate {}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  items,
  isLoading,
  error,
  page,
  onClickItem,
  onClickNavigate,
}: IHotelOverviewTemplate) => {
  return (
    <PageLayout error={error} isLoading={isLoading}>
      <OverviewList
        items={items}
        navigateLabel="Dodaj hotel"
        noItemsLabel="Brak hoteli w systemie"
        page={page}
        title="Hotele"
        onClickItem={onClickItem}
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
