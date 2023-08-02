import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { HotelOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHotel } from '~/models';

export const HotelOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IHotel[], Error>(
    Endpoints.HOTELS_LIST,
    fetchGet
  );

  const onClickNavigateToEditHotel = (id: number) =>
    navigate(`/${Slugs.EDIT_HOTEL}/${id}`);

  const onClickNavigateToCreateHotel = () => navigate(`/${Slugs.CREATE_HOTEL}`);

  return (
    <HotelOverviewTemplate
      error={error}
      isLoading={isLoading}
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
