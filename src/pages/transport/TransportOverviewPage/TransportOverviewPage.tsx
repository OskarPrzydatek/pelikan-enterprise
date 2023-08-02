import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { TransportOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { ITransport } from '~/models';

export const TransportOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<ITransport[]>(
    Endpoints.TRANSPORTS_LIST,
    fetchGet
  );

  const onClickNavigateToEditTransport = (id: number) =>
    navigate(`/${Slugs.EDIT_TRANSPORT}/${id}`);

  const onClickNavigateToCreateTransport = () =>
    navigate(`/${Slugs.CREATE_TRANSPORT}`);

  return (
    <TransportOverviewTemplate
      page={page}
      items={[
        { id: 1, name: 'transport1' },
        { id: 2, name: 'transport2' },
        { id: 3, name: 'transport3' },
        { id: 4, name: 'transport4' },
        { id: 5, name: 'transport5' },
      ]}
      onClickItem={onClickNavigateToEditTransport}
      onClickNavigate={onClickNavigateToCreateTransport}
    />
  );
};
