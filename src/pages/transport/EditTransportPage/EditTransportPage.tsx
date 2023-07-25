import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const EditTransportPage: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h2>Edit Transport Page</h2>
      <p>id: {id}</p>
    </PageLayout>
  );
};
