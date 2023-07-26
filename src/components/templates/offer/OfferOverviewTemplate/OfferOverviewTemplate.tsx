import { OverviewList } from '~/components/organisms';
import { PageLayout } from '~/styles';

interface IOfferOverviewTemplate {
  page?: string;
  onClickNavigate: () => void;
}

export const OfferOverviewTemplate: React.FC<IOfferOverviewTemplate> = ({
  page,
  onClickNavigate,
}: IOfferOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        navigateLabel="Dodaj ofertę"
        noItemsLabel="Brak ofert w systemie"
        page={page}
        title="Oferty"
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
