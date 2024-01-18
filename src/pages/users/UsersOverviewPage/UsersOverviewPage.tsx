import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { UsersOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IUserData } from '~/models/data';
import { errorNotification, successNotification } from '~/notifications';

export const UsersOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IUserData[], Error>(
    Endpoints.USERS_LIST,
    fetchGet
  );

  const onClickDeleteUser = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_USER}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.USERS_LIST);
      successNotification('Użytkownik został usunięty pomyślnie');
      return;
    }

    errorNotification();
  };

  const onClickNavigateToEditUser = (id: number) =>
    navigate(`/${Slugs.EDIT_USER}/${id}`);

  const onClickNavigateToCreateUser = () => navigate(`/${Slugs.CREATE_USER}`);

  return (
    <UsersOverviewTemplate
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      onClickDelete={onClickDeleteUser}
      onClickEdit={onClickNavigateToEditUser}
      onClickNavigateToCreatePage={onClickNavigateToCreateUser}
    />
  );
};
