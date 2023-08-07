import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateHashtagTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHashtag } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateHashtagPage: React.FC = () => {
  const methods = useForm<IHashtag>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IHashtag> = async (data) => {
    const response = await fetchPost<IHashtag>(Endpoints.CREATE_HASHTAG, data);

    if (response.ok) {
      successNotification('Hashtag dodano pomyślnie');
      navigate(`/${Slugs.HASHTAG_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateHashtagTemplate
      creatHashtagFormMethods={methods}
      onSubmitCreateHashtag={methods.handleSubmit(onSubmit)}
    />
  );
};
