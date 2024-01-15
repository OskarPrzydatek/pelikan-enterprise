import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditHotelTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHotel, IHotelData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const EditHotelPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<IHotelData, Error>(
    `${Endpoints.HOTEL_BY_ID}/${id!}`,
    fetchGet
  );
  const methods = useForm<IHotel>({
    values: {
      name: data?.name!,
      address: data?.address!,
      stars: data?.stars!,
      description: data?.description!,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IHotel> = async (data) => {
    const body = {
      id,
      ...data,
    };
    const response = await fetchPut<IHotel>(
      `${Endpoints.UPDATE_HOTEL}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Hashtag dodano pomyślnie');
      navigate(`/${Slugs.HOTEL_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditHotelTemplate
      editHotelFormMethods={methods}
      error={error}
      isLoading={isLoading}
      onSubmitEditHotel={methods.handleSubmit(onSubmit)}
    />
  );
};
