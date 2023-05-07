import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const Edit: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <div>
        <h2>Edit page template</h2>
        <p>id: {id}</p>
      </div>
    </PageLayout>
  );
};
