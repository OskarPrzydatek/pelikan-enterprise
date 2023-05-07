import { Outlet } from 'react-router-dom';

import { Footer, HeaderBar } from '~/components/organisms';
import { MainLayout } from '~/styles';

import { version } from '../package.json';

export const Body: React.FC = () => {
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
