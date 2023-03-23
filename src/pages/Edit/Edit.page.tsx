import { useParams } from 'react-router-dom';

import { EditTemplate } from '~/components/templates';
import { IPage } from '~/models';

interface IEdit extends IPage {}

export const Edit: React.FC<IEdit> = ({ title }: IEdit) => {
  const { id } = useParams();

  return <EditTemplate id={id} title={title} />;
};
