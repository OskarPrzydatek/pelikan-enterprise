import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';

interface IOfferOverviewTemplate extends IOverviewTemplate {}

export const OfferOverviewTemplate: React.FC<IOfferOverviewTemplate> = ({
  items,
  page,
  isLoading,
  error,
  onClickItem,
  onClickNavigate,
}: IOfferOverviewTemplate) => {
  return (
    <PageLayout error={error} isLoading={isLoading}>
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
