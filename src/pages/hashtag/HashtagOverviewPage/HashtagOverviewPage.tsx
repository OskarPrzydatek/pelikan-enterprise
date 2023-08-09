import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { HashtagOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IHashtagData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const HashtagOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IHashtagData[], Error>(
    Endpoints.HASHTAGS_LIST,
    fetchGet
  );

  const onClickDeleteHashtag = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_ATTRACTION}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.ATTRACTIONS_LIST);
      successNotification('Hashtag został usunięty pomyślnie');
      return;
    }

    errorNotification();
  };

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
