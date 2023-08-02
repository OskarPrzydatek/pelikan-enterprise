import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate } from '~/models';

interface IAttractionOverviewTemplate extends IOverviewTemplate {}

export const AttractionOverviewTemplate: React.FC<
  IAttractionOverviewTemplate
> = ({
  items,
  page,
  isLoading,
  error,
  onClickItem,
  onClickNavigate,
}: IAttractionOverviewTemplate) => {
  return (
    <PageLayout error={error} isLoading={isLoading}>
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
