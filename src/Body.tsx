import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Footer, HeaderBar } from '~/components/organisms';
import { MainLayout } from '~/styles';

import { version } from '../package.json';

import { Slugs } from './constants';

export const Body: React.FC = () => {
  const navigate = useNavigate();

  const loggedUser = localStorage.getItem('loggedUser');

  // Prevent connect to UI if not user logged in
  React.useEffect(() => {
    if (loggedUser === null) {
      navigate(Slugs.LOGIN);
    }
  }, [loggedUser, navigate]);

  return (
    <>
      <HeaderBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer version={version} />
    </>
  );
};
