import { useNavigate, useParams } from 'react-router-dom';

import { HotelOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const HotelOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToEditHotel = (id: number) =>
    navigate(`/${Slugs.EDIT_HOTEL}/${id}`);

  const onClickNavigateToCreateHotel = () => navigate(`/${Slugs.CREATE_HOTEL}`);

  return (
    <HotelOverviewTemplate
      page={page}
      items={[
        { id: 1, name: 'hotel1' },
        { id: 2, name: 'hotel2' },
        { id: 3, name: 'hotel3' },
        { id: 4, name: 'hotel4' },
        { id: 5, name: 'hotel5' },
      ]}
      onClickItem={onClickNavigateToEditHotel}
      onClickNavigate={onClickNavigateToCreateHotel}
    />
  );
};
