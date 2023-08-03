import { OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { IHotelData, IOverviewTemplate } from '~/models';

interface IHotelOverviewTemplate extends IOverviewTemplate {
  data: IHotelData[] | undefined;
}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  data,
  page,
  isLoading,
  error,
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IHotelOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hotel"
        noItemsLabel="Brak hoteli w systemie"
        page={page}
        title="Hotele"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                dataTestID={`hotel-overview-list-item-${id}`}
                deleteIconTestID={`hotel-overview-delete-${id}`}
                editIconTestID={`hotel-overview-edit-${id}`}
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
