import { Outlet } from 'react-router-dom';

import { Footer, HeaderBar } from '~/components/organisms';
import { Main } from '~/styles';

import { version } from '../package.json';

export const Body: React.FC = () => {
  return (
    <>
      <HeaderBar />
      <Main>
        <Outlet />
      </Main>
      <Footer version={version} />
    </>
  );
};
