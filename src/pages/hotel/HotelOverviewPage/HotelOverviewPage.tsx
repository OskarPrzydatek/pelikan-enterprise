import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { HotelOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHotelData } from '~/models';

export const HotelOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IHotelData[], Error>(
    Endpoints.HOTELS_LIST,
    fetchGet
  );

  const onClickNavigateToEditHotel = (id: number) =>
    navigate(`/${Slugs.EDIT_HOTEL}/${id}`);

  const onClickNavigateToCreateHotel = () => navigate(`/${Slugs.CREATE_HOTEL}`);

  return (
    <HotelOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickItem={onClickNavigateToEditHotel}
      onClickNavigate={onClickNavigateToCreateHotel}
    />
  );
};
