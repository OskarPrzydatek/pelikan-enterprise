import { CreateTemplate } from '~/components/templates';
import { IPage } from '~/models';

interface ICreate extends IPage {}

export const Create: React.FC<ICreate> = ({ title }: ICreate) => {
  return <CreateTemplate title={title} />;
};
