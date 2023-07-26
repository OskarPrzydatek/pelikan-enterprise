import { useNavigate, useParams } from 'react-router-dom';

import { OfferOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const OfferOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToCreateOffer = () => navigate(`/${Slugs.CREATE_OFFER}`);

  return (
    <OfferOverviewTemplate
      page={page}
      onClickNavigate={onClickNavigateToCreateOffer}
    />
  );
};
