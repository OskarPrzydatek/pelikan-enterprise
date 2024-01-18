import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPost, fetchPut } from '~/api';
import { EditUserTemplate } from '~/components/templates';
import { Endpoints, Slugs, userRoleType } from '~/constants';
import { ISelectOption } from '~/models';
import { IUserData } from '~/models/data';
import { IUser } from '~/models/forms';
import { errorNotification, successNotification } from '~/notifications';

export const EditUserPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<IUserData, Error>(
    `${Endpoints.USER_BY_ID}/${id!}`,
    fetchGet
  );
  const methods = useForm<IUser>({
    values: {
      email: data?.email!,
      firstName: data?.firstName!,
      lastName: data?.lastName!,
      password: data?.password!,
      phoneNumber: data?.phoneNumber!,
      userType: data?.userType!,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const body = {
      id,
      ...data,
    };
    const response = await fetchPut<IUser>(
      `${Endpoints.UPDATE_USER}/${id!}` as Endpoints,
      body
    );

    if (response.ok) {
      successNotification('Użytkownik zaktualizowany pomyślnie');
      navigate(`/${Slugs.USERS_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  return (
    <EditUserTemplate
      editUserFormMethods={methods}
      error={error}
      isLoading={isLoading}
      userRoleOptions={userRoleType as unknown as ISelectOption[]}
      onSubmitEditUser={methods.handleSubmit(onSubmit)}
    />
  );
};
