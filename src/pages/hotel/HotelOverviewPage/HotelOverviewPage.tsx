import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { HotelOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHotelData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const HotelOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IHotelData[], Error>(
    Endpoints.HOTELS_LIST,
    fetchGet
  );

  const onClickDeleteHotel = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_HOTEL}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.HOTELS_LIST);
      successNotification('Hotel został usunięty pomyślnie');
      return;
    }

    errorNotification();
  };

  const onClickNavigateToEditHotel = (id: number) =>
    navigate(`/${Slugs.EDIT_HOTEL}/${id}`);

  const onClickNavigateToCreateHotel = () => navigate(`/${Slugs.CREATE_HOTEL}`);

  return (
    <HotelOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteHotel}
      onClickEdit={onClickNavigateToEditHotel}
      onClickNavigateToCreatePage={onClickNavigateToCreateHotel}
    />
  );
};
