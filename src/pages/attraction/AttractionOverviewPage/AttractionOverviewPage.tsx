import { useNavigate, useParams } from 'react-router-dom';

import { AttractionOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const AttractionOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToEditAtraction = (id: number) =>
    navigate(`/${Slugs.EDIT_ATTRACTION}/${id}`);

  const onClickNavigateToCreateAttraction = () =>
    navigate(`/${Slugs.CREATE_ATTRACTION}`);

  return (
    <AttractionOverviewTemplate
      page={page}
      items={[
        { id: 1, name: 'attraction1' },
        { id: 2, name: 'attraction2' },
        { id: 3, name: 'attraction3' },
        { id: 4, name: 'attraction4' },
        { id: 5, name: 'attraction5' },
      ]}
      onClickItem={onClickNavigateToEditAtraction}
      onClickNavigate={onClickNavigateToCreateAttraction}
    />
  );
};
