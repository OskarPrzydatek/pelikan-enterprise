import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const EditAttractionPage: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h2>Edit Attraction Page</h2>
      <p>id: {id}</p>
    </PageLayout>
  );
};
