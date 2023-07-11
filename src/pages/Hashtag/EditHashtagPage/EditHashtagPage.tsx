import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const EditHashtagPage: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h2>Edit Hashtag Page</h2>
      <p>id: {id}</p>
    </PageLayout>
  );
};
