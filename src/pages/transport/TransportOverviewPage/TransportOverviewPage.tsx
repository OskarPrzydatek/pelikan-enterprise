import { useNavigate, useParams } from 'react-router-dom';

import { TransportOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const TransportOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToCreateTransport = () =>
    navigate(`/${Slugs.CREATE_TRANSPORT}`);

  return (
    <TransportOverviewTemplate
      page={page}
      onClickNavigate={onClickNavigateToCreateTransport}
    />
  );
};
