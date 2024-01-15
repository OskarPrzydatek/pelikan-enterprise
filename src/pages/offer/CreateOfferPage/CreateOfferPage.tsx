import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  fetchAddMultipleAttractionsToOffer,
  fetchAddOfferWithHandlingOfferData,
} from '~/api';
import { CreateOfferTemplate } from '~/components/templates';
import { Slugs } from '~/constants';
import { useCachedOfferResources } from '~/hooks/useCachedOfferResources/useCachedOfferResources';
import { IAttractionData, IHotelData, IOffer, ITransportData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();
  const navigate = useNavigate();
  const {
    attractionsList,
    hotelsList,
    transportsList,
    resourcesError,
    resourcesIsLoading,
  } = useCachedOfferResources();

  const [showAttractionsModal, setShowAttractionsModal] =
    React.useState<boolean>(false);
  const [attractionsToSelect, setAttractionsToSelect] = React.useState<
    IAttractionData[]
  >([]);
  const [offerAtractions, setOfferAttractions] = React.useState<
    IAttractionData[]
  >([]);
  const [createdOfferId, setCreatedOfferId] = React.useState<number>(0);

  const mapHotelsToOptions = (data: IHotelData[]) => {
    if (hotelsList) {
      return data.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  };

  const mapTransportsToOptions = (data: ITransportData[]) => {
    if (transportsList) {
      return data.map(({ id, transportType }) => ({
        value: id,
        label: transportType,
      }));
    }

    return [];
  };

  const onClickAddAttractionToOffer = (attraction: IAttractionData) => {
    const filtredBySelectedAttractions = attractionsToSelect.filter(
      (item) => item.id !== attraction.id
    );

    setAttractionsToSelect(filtredBySelectedAttractions);
    setOfferAttractions((prev) => [...prev, attraction]);
  };

  const onClickAcceptModal = async () => {
    const responses = await fetchAddMultipleAttractionsToOffer(
      createdOfferId,
      offerAtractions
    );

    const rejectedResonses = responses.filter(
      (response: PromiseSettledResult<Response>) =>
        response.status !== 'fulfilled'
    );

    if (rejectedResonses.length === 0) {
      successNotification('Atrakcje do ofety dodane pomyślnie');
      navigate(`/${Slugs.OFFER_OVERVIEW}`);
      return;
    }

    errorNotification(
      `Nie udało się dodać ${rejectedResonses.length} atrakcji`
    );
  };

  const onClickCloseModal = () => {
    setShowAttractionsModal(false);
    navigate(`/${Slugs.OFFER_OVERVIEW}`);
  };

  const onSubmit: SubmitHandler<IOffer> = async (data) => {
    const { response, createdOfferJSON } =
      await fetchAddOfferWithHandlingOfferData(data);

    if (response.ok) {
      successNotification('Oferta dodana pomyślnie');
      setCreatedOfferId(createdOfferJSON.id);
      setShowAttractionsModal(true);
      return;
    }

    errorNotification();
  };

  React.useEffect(() => {
    setAttractionsToSelect(attractionsList ?? []);
  }, [attractionsList]);

  return (
    <CreateOfferTemplate
      attractions={attractionsToSelect}
      createOfferFormMethods={methods}
      error={resourcesError}
      hotelOptions={mapHotelsToOptions(hotelsList!)}
      isLoading={resourcesIsLoading}
      showAttractionsModal={showAttractionsModal}
      transportOptions={mapTransportsToOptions(transportsList!)}
      onClickAcceptModal={onClickAcceptModal}
      onClickAddAttractionToOffer={onClickAddAttractionToOffer}
      onClickCloseModal={onClickCloseModal}
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
