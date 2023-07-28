import { OverviewList } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';
import { PageLayout } from '~/styles';

interface IOfferOverviewTemplate extends IOverviewTemplate {}

export const OfferOverviewTemplate: React.FC<IOfferOverviewTemplate> = ({
  items,
  page,
  onClickItem,
  onClickNavigate,
}: IOfferOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        items={items}
        navigateLabel="Dodaj ofertę"
        noItemsLabel="Brak ofert w systemie"
        page={page}
        title="Oferty"
        onClickItem={onClickItem}
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
