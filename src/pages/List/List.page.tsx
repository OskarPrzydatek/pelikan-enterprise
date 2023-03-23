import { useParams } from 'react-router-dom';

import { ListTemplate } from '~/components/templates';
import { IPage } from '~/models';

interface IList extends IPage {}

export const List: React.FC<IList> = ({ title }: IList) => {
  const { page } = useParams();

  return <ListTemplate page={page} title={title} />;
};
