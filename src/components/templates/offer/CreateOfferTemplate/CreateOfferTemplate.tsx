import { UseFormReturn } from 'react-hook-form';

import { Row } from '~/components/atoms';
import {
  DateField,
  Modal,
  OverviewListItem,
  Select,
  TextArea,
  TextField,
} from '~/components/molecules';
import { ErrorBundaryLoader, Form, OverviewList } from '~/components/organisms';
import { usePagination } from '~/hooks';
import { IAttractionData, IHashtagData, IOffer, ISelectOption } from '~/models';
import { numericValidator, requiredValidator } from '~/validators';

interface ICreateOfferTemplate {
  isLoading: boolean;
  error: Error | undefined;
  createOfferFormMethods: UseFormReturn<IOffer>;
  transportOptions: ISelectOption[];
  hotelOptions: ISelectOption[];
  attractions: IAttractionData[];
  hashtags: IHashtagData[];
  showHashtagsModal: boolean;
  showAttractionsModal: boolean;
  onSubmitCreateOffer: () => void;
  onClickAcceptHashtagModal: () => void;
  onClickCloseHashtagModal: () => void;
  onClickAddHashtagToOffer: (hashtag: IHashtagData) => void;
  onClickAcceptAttractionModal: () => void;
  onClickCloseAttractionModal: () => void;
  onClickAddAttractionToOffer?: (attraction: IAttractionData) => void;
}

export const CreateOfferTemplate: React.FC<ICreateOfferTemplate> = ({
  isLoading,
  error,
  createOfferFormMethods,
  transportOptions,
  hotelOptions,
  attractions,
  hashtags,
  showHashtagsModal,
  showAttractionsModal,
  onSubmitCreateOffer,
  onClickAcceptHashtagModal,
  onClickCloseHashtagModal,
  onClickAddHashtagToOffer,
  onClickAcceptAttractionModal,
  onClickCloseAttractionModal,
  onClickAddAttractionToOffer,
}: ICreateOfferTemplate) => {
  const { isArray } = Array;
  const {
    currentPage: hashtagCurrentPage,
    numberOfPages: hashtagNumberOfPages,
    paginationStart: hashtagPaginationStart,
    paginationEnd: hashtagPaginationEnd,
    onClickNextPage: onClickNextHashtagPage,
    onClickPrevPage: onClickPrevHashtagPage,
  } = usePagination(hashtags.length, undefined);
  const {
    currentPage: attractionCurrentPage,
    numberOfPages: attractionNumberOfPages,
    paginationStart: attractionPaginationStart,
    paginationEnd: attractionPaginationEnd,
    onClickNextPage: onClickNextAttractionPage,
    onClickPrevPage: onClickPrevAttractionPage,
  } = usePagination(attractions.length, undefined);

  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={createOfferFormMethods}
        submitLabel="Dodaj"
        title="Dodaj ofertę"
        onSubmit={onSubmitCreateOffer}
      >
        <TextField
          errorMessageTestID="create-offer-name-error"
          inputTestID="create-offer-name"
          label="Nazwa oferty"
          name="name"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Row>
          <TextField
            errorMessageTestID="create-offer-number-of-guests-error"
            inputTestID="create-offer-quantity"
            label="Ilość miejsc"
            name="quantity"
            registerOptions={{
              ...numericValidator,
            }}
          />
          <Select
            errorMessageTestID="create-offer-transport-error"
            label="Transport"
            name="transport.id"
            selectOptions={transportOptions}
            selectTestID="create-offer-transport"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <TextField
            errorMessageTestID="create-offer-destination-error"
            inputTestID="create-offer-destination"
            label="Miejsce docelowe"
            name="location"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <Select
            errorMessageTestID="create-offer-hotel-error"
            label="Hotel"
            name="hotel.id"
            selectOptions={hotelOptions}
            selectTestID="create-offer-hotel"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <Row>
          <DateField
            errorMessageTestID="create-offer-form-error"
            inputTestID="create-offer-form"
            label="Od"
            name="termFrom"
            registerOptions={{
              ...requiredValidator,
            }}
          />
          <DateField
            errorMessageTestID="create-offer-to-error"
            inputTestID="create-offer-to"
            label="Do"
            name="termTo"
            registerOptions={{
              ...requiredValidator,
            }}
          />
        </Row>
        <TextArea
          errorMessageTestID="create-offer-desription-error"
          label="Opis"
          name="description"
          textareaTestID="create-offer-desription"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-offer-price-error"
          inputTestID="create-offer-price"
          label="Cena"
          name="price"
          registerOptions={{
            ...numericValidator,
          }}
        />
      </Form>

      {showHashtagsModal ? (
        <Modal
          acceptLabel="Dodaj hashtagi"
          onClickAccept={onClickAcceptHashtagModal}
          onClickClose={onClickCloseHashtagModal}
        >
          <OverviewList
            navigateLabel="navigateLabel"
            noItemsLabel="Brak dostępnych hashtagów"
            numberOfPages={hashtagNumberOfPages}
            page={hashtagCurrentPage}
            title="Dodaj hashtagi do oferty"
            onClickNextPage={onClickNextHashtagPage}
            onClickPrevPage={onClickPrevHashtagPage}
          >
            {isArray(hashtags)
              ? hashtags
                  .slice(hashtagPaginationStart, hashtagPaginationEnd)
                  .map((hashtag) => (
                    <OverviewListItem
                      key={`${hashtag.id}-${hashtag.name}`}
                      dataTestID={`offer-add-attraction-modal-item-${hashtag.id}`}
                      hashtag={hashtag}
                      id={hashtag.id}
                      name={hashtag.name}
                      onClickAddHashtagToOffer={onClickAddHashtagToOffer}
                    />
                  ))
              : null}
          </OverviewList>
        </Modal>
      ) : null}

      {showAttractionsModal ? (
        <Modal
          acceptLabel="Dodaj atrakcje"
          onClickAccept={onClickAcceptAttractionModal}
          onClickClose={onClickCloseAttractionModal}
        >
          <OverviewList
            navigateLabel="navigateLabel"
            noItemsLabel="Brak dostępnych atrakcji"
            numberOfPages={attractionNumberOfPages}
            page={attractionCurrentPage}
            title="Dodaj atrakcje do oferty"
            onClickNextPage={onClickNextAttractionPage}
            onClickPrevPage={onClickPrevAttractionPage}
          >
            {isArray(attractions)
              ? attractions
                  .slice(attractionPaginationStart, attractionPaginationEnd)
                  .map((attraction) => (
                    <OverviewListItem
                      key={`${attraction.id}-${attraction.name}`}
                      attraction={attraction}
                      dataTestID={`offer-add-attraction-modal-item-${attraction.id}`}
                      id={attraction.id}
                      name={attraction.name}
                      onClickAddAttractionToOffer={onClickAddAttractionToOffer}
                    />
                  ))
              : null}
          </OverviewList>
        </Modal>
      ) : null}
    </ErrorBundaryLoader>
  );
};
