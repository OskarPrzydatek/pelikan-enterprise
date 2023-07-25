import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const EditOfferPage: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h2>Edit Offer Page</h2>
      <p>id: {id}</p>
    </PageLayout>
  );
};
