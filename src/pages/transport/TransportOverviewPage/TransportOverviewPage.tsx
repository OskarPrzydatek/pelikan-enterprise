import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { TransportOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { ITransportItem } from '~/models';

export const TransportOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<ITransportItem[], Error>(
    Endpoints.TRANSPORTS_LIST,
    fetchGet
  );

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
      onClickItem={onClickNavigateToEditTransport}
      onClickNavigate={onClickNavigateToCreateTransport}
    />
  );
};
