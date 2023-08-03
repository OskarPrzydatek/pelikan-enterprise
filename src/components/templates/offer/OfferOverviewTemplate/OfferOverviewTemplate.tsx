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
  onClickEdit,
  onClickDelete,
  onClickNavigateToCreatePage,
}: IOfferOverviewTemplate) => {
  const { isArray } = Array;

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <OverviewList
        navigateLabel="Dodaj ofertę"
        noItemsLabel="Brak ofert w systemie"
        page={page}
        title="Oferty"
        onClickNavigateToCreatePage={onClickNavigateToCreatePage}
      >
        {isArray(data)
          ? data.map(({ id, name }) => (
              <OverviewListItem
                key={`${id}-${name}`}
                dataTestID={`offer-overview-list-item-${id}`}
                deleteIconTestID={`offer-overview-delete-${id}`}
                editIconTestID={`offer-overview-edit-${id}`}
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
