import { useNavigate, useParams } from 'react-router-dom';

import { HotelOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const HotelOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToCreateHotel = () => navigate(`/${Slugs.CREATE_HOTEL}`);

  return (
    <HotelOverviewTemplate
      page={page}
      onClickNavigate={onClickNavigateToCreateHotel}
    />
  );
};
