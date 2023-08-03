import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchGet } from '~/api';
import { AttractionOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IAttractionData } from '~/models';

export const AttractionOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR<IAttractionData[], Error>(
    Endpoints.ATTRACTIONS_LIST,
    fetchGet
  );

  const onClickDeleteAttraction = () => {};

  const onClickNavigateToEditAttraction = (id: number) =>
    navigate(`/${Slugs.EDIT_ATTRACTION}/${id}`);

  const onClickNavigateToCreateAttraction = () =>
    navigate(`/${Slugs.CREATE_ATTRACTION}`);

  return (
    <AttractionOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteAttraction}
      onClickEdit={onClickNavigateToEditAttraction}
      onClickNavigateToCreatePage={onClickNavigateToCreateAttraction}
    />
  );
};
