import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { OfferOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IOfferData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const OfferOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IOfferData[], Error>(
    Endpoints.OFFERS_LIST,
    fetchGet
  );

  const onClickDeleteOffer = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_OFFER}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.OFFERS_LIST);
      successNotification('Oferta została usunięta pomyślnie');
      return;
    }

    errorNotification();
  };

  const onClickNavigateToEditOffer = (id: number) =>
    navigate(`/${Slugs.EDIT_OFFER}/${id}`);

  const onClickNavigateToCreateOffer = () => navigate(`/${Slugs.CREATE_OFFER}`);

  return (
    <OfferOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteOffer}
      onClickEdit={onClickNavigateToEditOffer}
      onClickNavigateToCreatePage={onClickNavigateToCreateOffer}
    />
  );
};
