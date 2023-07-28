import { useNavigate, useParams } from 'react-router-dom';

import { HashtagOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToEditHashtag = (id: number) =>
    navigate(`/${Slugs.EDIT_HASHTAG}/${id}`);

  const onClickNavigateToCreateHashtag = () =>
    navigate(`/${Slugs.CREATE_HASHTAG}`);

  return (
    <HashtagOverviewTemplate
      page={page}
      items={[
        { id: 1, name: 'hashtag1' },
        { id: 2, name: 'hashtag2' },
        { id: 3, name: 'hashtag3' },
        { id: 4, name: 'hashtag4' },
        { id: 5, name: 'hashtag5' },
      ]}
      onClickItem={onClickNavigateToEditHashtag}
      onClickNavigate={onClickNavigateToCreateHashtag}
    />
  );
};
