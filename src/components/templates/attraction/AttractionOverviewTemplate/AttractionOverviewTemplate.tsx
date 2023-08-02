import { OverviewList } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';
import { PageLayout } from '~/styles';

interface IAttractionOverviewTemplate extends IOverviewTemplate {}

export const AttractionOverviewTemplate: React.FC<
  IAttractionOverviewTemplate
> = ({
  items,
  page,
  onClickItem,
  onClickNavigate,
}: IAttractionOverviewTemplate) => {
  return (
    <PageLayout>
      <OverviewList
        items={items}
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page={page}
        title="Atrakcje"
        onClickItem={onClickItem}
        onClickNavigate={onClickNavigate}
      />
    </PageLayout>
  );
};
