import { OverviewList } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';
import { PageLayout } from '~/styles';

interface IHotelOverviewTemplate extends IOverviewTemplate {}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  items,
  page,
  onClickItem,
  onClickNavigate,
}: IHotelOverviewTemplate) => {
  return (
    <PageLayout>
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
