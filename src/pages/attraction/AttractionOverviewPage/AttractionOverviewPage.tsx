import { useNavigate, useParams } from 'react-router-dom';

import { AttractionOverviewTemplate } from '~/components/templates';
import { Slugs } from '~/constants';

export const AttractionOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const onClickNavigateToCreateAttraction = () =>
    navigate(`/${Slugs.CREATE_ATTRACTION}`);

  return (
    <AttractionOverviewTemplate
      page={page}
      onClickNavigate={onClickNavigateToCreateAttraction}
    />
  );
};
