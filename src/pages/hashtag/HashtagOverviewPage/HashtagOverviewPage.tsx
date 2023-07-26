import { useNavigate, useParams } from 'react-router-dom';

import { HashtagOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToCreateHashtag = () =>
    navigate(`/${Slugs.CREATE_HASHTAG}`);

  return (
    <HashtagOverviewTemplate
      page={page}
      onClickNavigate={onClickNavigateToCreateHashtag}
    />
  );
};
