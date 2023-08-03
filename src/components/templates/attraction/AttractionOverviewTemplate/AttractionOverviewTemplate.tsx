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
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IAttractionOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page={page}
        title="Atrakcje"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                dataTestID={`attraction-overview-list-item-${id}`}
                deleteIconTestID={`attraction-overview-delete-${id}`}
                editIconTestID={`attraction-overview-edit-${id}`}
                id={id}
                name={name}
                onClickDelete={onClickDelete}
                onClickEdit={onClickEdit}
              />
            ))
          : null}
      </OverviewList>
    </ErrorBundaryLoader>
  );
};
