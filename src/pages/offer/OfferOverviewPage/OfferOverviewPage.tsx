import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { OfferOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IOfferData } from '~/models';

export const OfferOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IOfferData[], Error>(
    Endpoints.OFFERS_LIST,
    fetchGet
  );

  const onClickNavigateToEditOffer = (id: number) =>
    navigate(`/${Slugs.EDIT_OFFER}/${id}`);

  const onClickNavigateToCreateOffer = () => navigate(`/${Slugs.CREATE_OFFER}`);

  return (
    <OfferOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickItem={onClickNavigateToEditOffer}
      onClickNavigate={onClickNavigateToCreateOffer}
    />
  );
};
