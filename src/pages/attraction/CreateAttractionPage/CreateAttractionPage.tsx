import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateAttractionTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IAttraction } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateAttractionPage: React.FC = () => {
  const methods = useForm<IAttraction>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAttraction> = async (data) => {
    const response = await fetchPost<IAttraction>(
      Endpoints.CREATE_ATTRACTION,
      data
    );

    if (response.ok) {
      successNotification('Atrakcję dodano pomyślnie');
      navigate(`/${Slugs.ATTRACTION_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateAttractionTemplate
      createAttractionFormMethods={methods}
      onSubmitCreateAttraction={methods.handleSubmit(onSubmit)}
    />
  );
};
