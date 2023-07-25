import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const EditHotelPage: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h2>Edit Hotel Page</h2>
      <p>id: {id}</p>
    </PageLayout>
  );
};
