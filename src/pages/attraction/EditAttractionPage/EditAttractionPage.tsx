import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditAttractionTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IAttraction, IAttractionData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const EditAttractionPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<IAttractionData, Error>(
    `${Endpoints.ATTRACTION_BY_ID}/${id!}`,
    fetchGet
  );
  const methods = useForm<IAttraction>({
    values: {
      name: data?.name!,
      price: data?.price!,
      description: data?.description!,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAttraction> = async (data) => {
    const body = {
      id,
      ...data,
    };
    const response = await fetchPut<IAttraction>(
      `${Endpoints.UPDATE_ATTRACTION}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Hashtag dodano pomyślnie');
      navigate(`/${Slugs.ATTRACTION_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditAttractionTemplate
      editAttractionFormMethods={methods}
      error={error}
      isLoading={isLoading}
      onSubmitEditAttraction={methods.handleSubmit(onSubmit)}
    />
  );
};
