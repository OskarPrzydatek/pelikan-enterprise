import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { TransportOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { ITransportData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const TransportOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<ITransportData[], Error>(
    Endpoints.TRANSPORTS_LIST,
    fetchGet
  );

  const onClickDeleteTransport = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_TRANSPORT}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.TRANSPORTS_LIST);
      successNotification('Transport został usunięty pomyślnie');
      return;
    }

    errorNotification();
  };

  const onClickNavigateToEditTransport = (id: number) =>
    navigate(`/${Slugs.EDIT_TRANSPORT}/${id}`);

  const onClickNavigateToCreateTransport = () =>
    navigate(`/${Slugs.CREATE_TRANSPORT}`);

  return (
    <TransportOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteTransport}
      onClickEdit={onClickNavigateToEditTransport}
      onClickNavigateToCreatePage={onClickNavigateToCreateTransport}
    />
  );
};
