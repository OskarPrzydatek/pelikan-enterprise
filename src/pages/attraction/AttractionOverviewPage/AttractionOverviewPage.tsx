import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

import { fetchDelete, fetchGet } from '~/api';
import { AttractionOverviewTemplate } from '~/components/templates';
import { Endpoints, Slugs } from '~/constants';
import { IAttractionData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const AttractionOverviewPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IAttractionData[], Error>(
    Endpoints.ATTRACTIONS_LIST,
    fetchGet
  );

  const onClickDeleteAttraction = async (id: number) => {
    const endpoint = `${Endpoints.DELETE_ATTRACTION}/${id}` as Endpoints;
    const response = await fetchDelete(endpoint);

    if (response.ok) {
      await mutate(Endpoints.ATTRACTIONS_LIST);
      successNotification('Atrakcja została usunięta pomyślnie');
      return;
    }

    errorNotification();
  };

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
