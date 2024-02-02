import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditHashtagTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHashtag, IHashtagData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const EditHashtagPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<IHashtagData, Error>(
    `${Endpoints.HASHTAG_BY_ID}/${id!}`,
    fetchGet
  );
  const methods = useForm<IHashtag>({
    values: {
      name: data?.name!,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IHashtag> = async (data) => {
    const body = {
      id,
      ...data,
    };
    const response = await fetchPut<IHashtag>(
      `${Endpoints.UPDATE_HASHTAG}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Hashtag zmieniono pomyślnie');
      navigate(`/${Slugs.HASHTAG_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditHashtagTemplate
      editHashtagFormMethods={methods}
      error={error}
      isLoading={isLoading}
      onSubmitEditHashtag={methods.handleSubmit(onSubmit)}
    />
  );
};
