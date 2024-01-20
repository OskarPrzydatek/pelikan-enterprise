import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchGet } from '~/api';
import { LoginPageTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IUserData } from '~/models/data';
import { ILogin } from '~/models/forms';
import { errorNotification } from '~/notifications';

export const LoginPage: React.FC = () => {
  const methods = useForm<ILogin>();
  const navigate = useNavigate();

  const loggedUser = localStorage.getItem('loggedUser');

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const response = await fetchGet<IUserData[]>(Endpoints.USERS_LIST);

    const systemUsers = response.filter(
      (user) => user.userType === 'WORKER' || user.userType === 'ADMIN'
    );
    const loggingUser = systemUsers.find((user) => user.email === data.email);

    if (loggingUser === undefined) {
      errorNotification('Brak uzytkownika w systemie');
      return;
    }

    if (loggingUser.password !== data.password) {
      errorNotification('Email lub hasło nieprawidłowe');
      return;
    }

    localStorage.setItem(
      'loggedUser',
      JSON.stringify({
        firstName: loggingUser.firstName,
        lastName: loggingUser.lastName,
        userType: loggingUser.userType,
      })
    );

    navigate(Slugs.OFFER_OVERVIEW);
  };

  // Prevent connect to UI if not user logged in
  React.useEffect(() => {
    if (loggedUser !== null) {
      navigate(-1);
    }
  }, [loggedUser, navigate]);

  return (
    <LoginPageTemplate
      loginFormMethods={methods}
      onSubmitLogin={methods.handleSubmit(onSubmit)}
    />
  );
};
