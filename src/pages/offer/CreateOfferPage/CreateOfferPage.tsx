import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  fetchAddMultipleAttractionsToOffer,
  fetchAddMultipleHashtagsToOffer,
  fetchAddOfferWithHandlingOfferData,
} from '~/api';
import { CreateOfferTemplate } from '~/components/templates';
import { Slugs } from '~/constants';
import { useCachedOfferResources } from '~/hooks/useCachedOfferResources/useCachedOfferResources';
import {
  IAttractionData,
  IHashtagData,
  IHotelData,
  IOffer,
  ITransportData,
} from '~/models';
import { errorNotification, successNotification } from '~/notifications';

export const CreateOfferPage: React.FC = () => {
  const methods = useForm<IOffer>();
  const navigate = useNavigate();
  const {
    attractionsList,
    hotelsList,
    transportsList,
    hashtagsList,
    resourcesError,
    resourcesIsLoading,
  } = useCachedOfferResources();

  const [showHashtagsModal, setShowHashtagsModal] =
    React.useState<boolean>(false);
  const [hashtagsToSelect, setHashtagsToSelect] = React.useState<
    IHashtagData[]
  >([]);
  const [offerHashtags, setOfferHashtags] = React.useState<IHashtagData[]>([]);

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
      return data.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  };

  const onClickAddHashtagToOffer = (hashtag: IHashtagData) => {
    const filtredBySelectedHashtags = hashtagsToSelect.filter(
      (item) => item.id !== hashtag.id
    );

    setHashtagsToSelect(filtredBySelectedHashtags);
    setOfferHashtags((prev) => [...prev, hashtag]);
  };

  const onClickCloseHashtagModal = () => {
    setShowHashtagsModal(false);
    setShowAttractionsModal(true);
  };

  const onClickAcceptHashtagModal = async () => {
    const responses = await fetchAddMultipleHashtagsToOffer(
      createdOfferId,
      offerHashtags
    );

    const rejectedResonses = responses.filter(
      (response: PromiseSettledResult<Response>) =>
        response.status !== 'fulfilled'
    );

    if (rejectedResonses.length === 0) {
      successNotification('Hashtagi do ofety dodane pomyślnie');
      setShowHashtagsModal(false);
      setShowAttractionsModal(true);
      return;
    }

    errorNotification(
      `Nie udało się dodać hashtagów: ${rejectedResonses.length}`
    );
  };

  const onClickAddAttractionToOffer = (attraction: IAttractionData) => {
    const filtredBySelectedAttractions = attractionsToSelect.filter(
      (item) => item.id !== attraction.id
    );

    setAttractionsToSelect(filtredBySelectedAttractions);
    setOfferAttractions((prev) => [...prev, attraction]);
  };

  const onClickCloseAttractionModal = () => {
    setShowAttractionsModal(false);
    navigate(`/${Slugs.OFFER_OVERVIEW}`);
  };

  const onClickAcceptAttractionModal = async () => {
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
      `Nie udało się dodać atrakcji: ${rejectedResonses.length}`
    );
  };

  const onSubmit: SubmitHandler<IOffer> = async (data) => {
    const { response, createdOfferJSON } =
      await fetchAddOfferWithHandlingOfferData(data);

    if (response.ok) {
      successNotification('Oferta dodana pomyślnie');
      setCreatedOfferId(createdOfferJSON.id);
      setShowHashtagsModal(true);
      return;
    }

    errorNotification();
  };

  React.useEffect(() => {
    setAttractionsToSelect(attractionsList ?? []);
    setHashtagsToSelect(hashtagsList ?? []);
  }, [attractionsList, hashtagsList]);

  return (
    <CreateOfferTemplate
      attractions={attractionsToSelect}
      createOfferFormMethods={methods}
      error={resourcesError}
      hashtags={hashtagsToSelect}
      hotelOptions={mapHotelsToOptions(hotelsList!)}
      isLoading={resourcesIsLoading}
      showAttractionsModal={showAttractionsModal}
      showHashtagsModal={showHashtagsModal}
      transportOptions={mapTransportsToOptions(transportsList!)}
      onClickAcceptAttractionModal={onClickAcceptAttractionModal}
      onClickAcceptHashtagModal={onClickAcceptHashtagModal}
      onClickAddAttractionToOffer={onClickAddAttractionToOffer}
      onClickAddHashtagToOffer={onClickAddHashtagToOffer}
      onClickCloseAttractionModal={onClickCloseAttractionModal}
      onClickCloseHashtagModal={onClickCloseHashtagModal}
      onSubmitCreateOffer={methods.handleSubmit(onSubmit)}
    />
  );
};
