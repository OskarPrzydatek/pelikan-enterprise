import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateTransportTemplate } from '~/components/templates';
import { Endpoints, Slugs, transportTypeOptions } from '~/constants';
import { ITransport } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateTransportPage: React.FC = () => {
  const methods = useForm<ITransport>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ITransport> = async (data) => {
    const response = await fetchPost<ITransport>(
      Endpoints.CREATE_TRANSPORT,
      data
    );

    if (response.ok) {
      successNotification('Transport dodano pomyślnie');
      navigate(`/${Slugs.TRANSPORT_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateTransportTemplate
      createTransportFormMethods={methods}
      transportTypeOptions={transportTypeOptions}
      onSubmitCreateTransport={methods.handleSubmit(onSubmit)}
    />
  );
};
