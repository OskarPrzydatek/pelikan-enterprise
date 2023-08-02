import { OverviewListItem } from '~/components/molecules';
import { OverviewList, PageLayout } from '~/components/organisms';
import { IOverviewTemplate, ITransportItem } from '~/models';

interface ITransportOverviewTemplate extends IOverviewTemplate {
  data: ITransportItem[] | undefined;
}

export const TransportOverviewTemplate: React.FC<
  ITransportOverviewTemplate
> = ({
  data,
  isLoading,
  error,
  page,
  onClickItem,
  onClickNavigate,
}: ITransportOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <PageLayout error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj Transport"
        noItemsLabel="Brak transportów w systemie"
        page={page}
        title="Transport"
        onClickNavigate={onClickNavigate}
      >
        {isArray(data)
          ? data.map(({ id, name, transportType }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`transport-overview-list-item-${id}`}
                name={transportType}
                onClickNavigate={() => onClickItem(id)}
              />
            ))
          : null}
      </OverviewList>
    </PageLayout>
  );
};
