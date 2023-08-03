import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { HashtagOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHashtagData } from '~/models';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IHashtagData[], Error>(
    Endpoints.HASHTAGS_LIST,
    fetchGet
  );

  const onClickDeleteHashtag = () => {};

  const onClickNavigateToEditHashtag = (id: number) =>
    navigate(`/${Slugs.EDIT_HASHTAG}/${id}`);

  const onClickNavigateToCreateHashtag = () =>
    navigate(`/${Slugs.CREATE_HASHTAG}`);

  return (
    <HashtagOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteHashtag}
      onClickEdit={onClickNavigateToEditHashtag}
      onClickNavigateToCreatePage={onClickNavigateToCreateHashtag}
    />
  );
};
