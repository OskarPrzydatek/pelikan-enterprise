import { OverviewList } from '~/components/organisms';
import { PageLayout } from '~/styles';

interface ITransportOverviewTemplate {
  page?: string;
  onClickNavigate: () => void;
}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({ page, onClickNavigate }: ITransportOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        navigateLabel="Dodaj Transport"
        noItemsLabel="Brak transportów w systemie"
        page={page}
        title="Transport"
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
