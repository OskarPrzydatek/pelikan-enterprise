import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { HashtagOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHashtag } from '~/models';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IHashtag[], Error>(
    Endpoints.HASHTAGS_LIST,
    fetchGet
  );

  const onClickNavigateToEditHashtag = (id: number) =>
    navigate(`/${Slugs.EDIT_HASHTAG}/${id}`);

  const onClickNavigateToCreateHashtag = () =>
    navigate(`/${Slugs.CREATE_HASHTAG}`);

  return (
    <HashtagOverviewTemplate
      error={error}
      isLoading={isLoading}
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
