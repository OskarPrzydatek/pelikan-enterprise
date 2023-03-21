import { useParams } from 'react-router-dom';

import { IPage } from '~/models';

interface IList extends IPage {}

export const List: React.FC<IList> = ({ title }: IList) => {
  const { page } = useParams();

  return (
    <div>
      <h2>{title}</h2>
      {page ? <p>page: {page}</p> : <p>page: 1</p>}
    </div>
  );
};
