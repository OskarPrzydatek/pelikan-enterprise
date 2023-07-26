import { OverviewList } from '~/components/organisms';
import { PageLayout } from '~/styles';

interface IHotelOverviewTemplate {
  page?: string;
  onClickNavigate: () => void;
}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  page,
  onClickNavigate,
}: IHotelOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        navigateLabel="Dodaj hotel"
        noItemsLabel="Brak hoteli w systemie"
        page={page}
        title="Hotele"
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
