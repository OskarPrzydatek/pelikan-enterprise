import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditTransortTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { ITransport, ITransportData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const EditTransportPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<ITransportData, Error>(
    `${Endpoints.TRANSPORT_BY_ID}/${id!}`,
    fetchGet
  );
  const methods = useForm<ITransport>({
    values: {
      name: data?.name!,
      transportType: data?.transportType!,
      description: data?.description!,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ITransport> = async (data) => {
    const body = {
      id,
      ...data,
    };
    const response = await fetchPut<ITransport>(
      `${Endpoints.UPDATE_TRANSPORT}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Hashtag dodano pomyślnie');
      navigate(`/${Slugs.TRANSPORT_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditTransortTemplate
      isLoading={isLoading}
      error={error}
      editTransortFormMethods={methods}
      onSubmitEditTransort={methods.handleSubmit(onSubmit)}
    />
  );
};
