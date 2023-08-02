import { OverviewListItem } from '~/components/molecules';
import { OverviewList, PageLayout } from '~/components/organisms';
import { IHotelItem, IOverviewTemplate } from '~/models';

interface IHotelOverviewTemplate extends IOverviewTemplate {
  data: IHotelItem[] | undefined;
}

export const HotelOverviewTemplate: React.FC<IHotelOverviewTemplate> = ({
  data,
  isLoading,
  error,
  page,
  onClickItem,
  onClickNavigate,
}: IHotelOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <PageLayout error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj hotel"
        noItemsLabel="Brak hoteli w systemie"
        page={page}
        title="Hotele"
        onClickNavigate={onClickNavigate}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`hotel-overview-list-item-${id}`}
                name={name}
                onClickNavigate={() => onClickItem(id)}
              />
            ))
          : null}
      </OverviewList>
    </PageLayout>
  );
};
