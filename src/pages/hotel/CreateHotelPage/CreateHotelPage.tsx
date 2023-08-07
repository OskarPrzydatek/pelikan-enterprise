import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateHotelTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHotel } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateHotelPage: React.FC = () => {
  const methods = useForm<IHotel>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IHotel> = async (data) => {
    const response = await fetchPost<IHotel>(Endpoints.CREATE_HOTEL, data);

    if (response.ok) {
      successNotification('Hotel dodano pomyślnie');
      navigate(`/${Slugs.HOTEL_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateHotelTemplate
      createHotelFormMethods={methods}
      onSubmitCreateHotel={methods.handleSubmit(onSubmit)}
    />
  );
};
