import { useLocation } from 'react-router-dom';

import { CreateTemplate } from '~/components/templates';

export const Create: React.FC = () => {
  const { pathname } = useLocation();

  // TODO: Remove when truly used
  // eslint-disable-next-line no-console
  console.log(pathname);

  return <CreateTemplate />;
};
