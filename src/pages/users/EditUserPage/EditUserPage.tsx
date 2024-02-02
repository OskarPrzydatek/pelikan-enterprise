import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet, fetchPut } from '~/api';
import { EditUserTemplate } from '~/components/templates';
import { Endpoints, Slugs, userRoleType } from '~/constants';
import { ISelectOption } from '~/models';
import { ILoggedUser, IUserData } from '~/models/data';
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
      userType: data?.userType! as IUser['userType'],
    },
  });
  const navigate = useNavigate();

  const loggedUser = JSON.parse(
    localStorage.getItem('loggedUser')!
  ) as ILoggedUser;

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
      successNotification('Użytkownik zzmieniony pomyślnie');
      navigate(`/${Slugs.USERS_OVERVIEW}`);
      return;
    }

    errorNotification();
  };

  // Redirect if user is worker
  React.useEffect(() => {
    if (loggedUser.userType !== 'ADMIN') {
      navigate(-1);
    }
  }, [loggedUser.userType, navigate]);

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
