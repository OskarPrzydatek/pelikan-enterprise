import { OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { IAttractionData, IOverviewTemplate } from '~/models';

interface IAttractionOverviewTemplate extends IOverviewTemplate {
  data: IAttractionData[] | undefined;
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
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
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
    </ErrorBundaryLoader>
  );
};
