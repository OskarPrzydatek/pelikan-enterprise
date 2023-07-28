import { useNavigate, useParams } from 'react-router-dom';

import { OfferOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const OfferOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToEditOffer = (id: number) =>
    navigate(`/${Slugs.EDIT_OFFER}/${id}`);

  const onClickNavigateToCreateOffer = () => navigate(`/${Slugs.CREATE_OFFER}`);

  return (
    <OfferOverviewTemplate
      page={page}
      items={[
        { id: 1, name: 'offer1' },
        { id: 2, name: 'offer2' },
        { id: 3, name: 'offer3' },
        { id: 4, name: 'offer4' },
        { id: 5, name: 'offer5' },
      ]}
      onClickItem={onClickNavigateToEditOffer}
      onClickNavigate={onClickNavigateToCreateOffer}
    />
  );
};
