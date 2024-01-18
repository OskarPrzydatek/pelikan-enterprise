import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchPost } from '~/api';
import { CreateUserTemplate } from '~/components/templates';
import { Endpoints, Slugs, userRoleType } from '~/constants';
import { ISelectOption } from '~/models';
import { IUser } from '~/models/forms';
import { errorNotification, successNotification } from '~/notifications';

export const CreateUserPage: React.FC = () => {
  const methods = useForm<IUser>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const response = await fetchPost<IUser>(Endpoints.CREATE_USER, data);

    if (response.ok) {
      successNotification('Użytkownik dodany pomyślnie');
      navigate(`/${Slugs.USERS_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <CreateUserTemplate
      createUserFormMethods={methods}
      userRoleOptions={userRoleType as unknown as ISelectOption[]}
      onSubmitCreateUser={methods.handleSubmit(onSubmit)}
    />
  );
};
