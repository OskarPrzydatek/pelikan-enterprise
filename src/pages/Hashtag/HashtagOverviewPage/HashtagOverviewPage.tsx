import { useParams } from 'react-router-dom';

import { PageLayout } from '~/styles';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();

  const pageLabel = page ?? 1;

  return (
    <PageLayout>
      <h2>List Hashtag Page</h2>
      <p data-testid="page-number">page: {pageLabel}</p>
    </PageLayout>
  );
};
