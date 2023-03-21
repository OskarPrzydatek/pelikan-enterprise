import { useParams } from 'react-router-dom';

import { IPage } from '~/models';

interface IEdit extends IPage {}

export const Edit: React.FC<IEdit> = ({ title }: IEdit) => {
  const { id } = useParams();

  return (
    <div>
      <h2>{title}</h2>
      <p>id: {id}</p>
    </div>
  );
};
