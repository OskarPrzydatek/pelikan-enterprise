import { OverviewList } from '~/components/organisms';
import { PageLayout } from '~/styles';

interface IAttractionOverviewTemplate {
  page?: string;
  onClickNavigate: () => void;
}

export const AttractionOverviewTemplate: React.FC<
  IAttractionOverviewTemplate
> = ({ page, onClickNavigate }: IAttractionOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page={page}
        title="Atrakcje"
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
