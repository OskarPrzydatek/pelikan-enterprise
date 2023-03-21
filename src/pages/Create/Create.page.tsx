import { IPage } from '~/models';

interface ICreate extends IPage {}

export const Create: React.FC<ICreate> = ({ title }: ICreate) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};
