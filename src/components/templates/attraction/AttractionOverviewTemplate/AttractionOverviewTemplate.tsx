import { OverviewListItem } from '~/components/molecules';
import { OverviewList, PageLayout } from '~/components/organisms';
import { IAttractionItem, IOverviewTemplate } from '~/models';

interface IAttractionOverviewTemplate extends IOverviewTemplate {
  data: IAttractionItem[] | undefined;
}

export const AttractionOverviewTemplate: React.FC<
  IAttractionOverviewTemplate
> = ({
  data,
  page,
  isLoading,
  error,
  onClickItem,
  onClickNavigate,
}: IAttractionOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <PageLayout error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page={page}
        title="Atrakcje"
        onClickNavigate={onClickNavigate}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`attraction-overview-list-item-${id}`}
                name={name}
                onClickNavigate={() => onClickItem(id)}
              />
            ))
          : null}
      </OverviewList>
    </PageLayout>
  );
};
