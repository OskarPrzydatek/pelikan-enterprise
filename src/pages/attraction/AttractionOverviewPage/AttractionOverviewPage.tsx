import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { AttractionOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IAttractionItem } from '~/models';

export const AttractionOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IAttractionItem[], Error>(
    Endpoints.ATTRACTIONS_LIST,
    fetchGet
  );

  const onClickNavigateToEditAtraction = (id: number) =>
    navigate(`/${Slugs.EDIT_ATTRACTION}/${id}`);

  const onClickNavigateToCreateAttraction = () =>
    navigate(`/${Slugs.CREATE_ATTRACTION}`);

  return (
    <AttractionOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickItem={onClickNavigateToEditAtraction}
      onClickNavigate={onClickNavigateToCreateAttraction}
    />
  );
};
