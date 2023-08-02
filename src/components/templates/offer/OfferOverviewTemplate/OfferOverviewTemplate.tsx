import { OverviewListItem } from '~/components/molecules';
import { OverviewList, ErrorBundaryLoader } from '~/components/organisms';
import { IOfferData, IOverviewTemplate } from '~/models';

interface IOfferOverviewTemplate extends IOverviewTemplate {
  data: IOfferData[] | undefined;
}

export const OfferOverviewTemplate: React.FC<IOfferOverviewTemplate> = ({
  data,
  page,
  isLoading,
  error,
  onClickItem,
  onClickNavigate,
}: IOfferOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj ofertę"
        noItemsLabel="Brak ofert w systemie"
        page={page}
        title="Oferty"
        onClickNavigate={onClickNavigate}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                buttonDataTestID={`overview-overview-list-item-${id}`}
                name={name}
                onClickNavigate={() => onClickItem(id)}
              />
            ))
          : null}
      </OverviewList>
    </ErrorBundaryLoader>
  );
};
