import { OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { IOverviewTemplate, ITransportData } from '~/models';

interface ITransportOverviewTemplate extends IOverviewTemplate {
  data: ITransportData[] | undefined;
}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({
  data,
  isLoading,
  error,
  page,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: ITransportOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj Transport"
        noItemsLabel="Brak transportów w systemie"
        page={page}
        title="Transport"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name, transportType }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                dataTestID={`transport-overview-list-item-${id}`}
                deleteIconTestID={`transport-overview-delete-${id}`}
                editIconTestID={`transport-overview-edit-${id}`}
                id={id}
                name={transportType}
                onClickDelete={onClickDelete}
                onClickEdit={onClickEdit}
              />
            ))
          : null}
      </OverviewList>
    </ErrorBundaryLoader>
  );
};
