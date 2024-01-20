import { useForm } from 'react-hook-form';

import { CreateOfferTemplate } from '~/components/templates';
import { IOffer } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateOfferTemplateHelper {
  onSubmitCreateOffer: () => void;
}

export const CreateOfferTemplateHelper: React.FC<
  ICreateOfferTemplateHelper
> = ({ onSubmitCreateOffer }: ICreateOfferTemplateHelper) => {
  const methods = useForm<IOffer>();

  return (
    <StyledComponentsProvider>
      <CreateOfferTemplate
        attractions={[]}
        createOfferFormMethods={methods}
        error={undefined}
        hashtags={[]}
        isLoading={false}
        showAttractionsModal={false}
        showHashtagsModal={false}
        hotelOptions={[
          { value: 'HOTEL_A', label: 'Hotel A' },
          { value: 'HOTEL_B', label: 'Hotel B' },
          { value: 'HOTEL_C', label: 'Hotel C' },
        ]}
        transportOptions={[
          { value: 'TRANSPORT_A', label: 'Transport A' },
          { value: 'TRANSPORT_B', label: 'Transport B' },
        ]}
        onClickAcceptAttractionModal={() => {}}
        onClickAcceptHashtagModal={() => {}}
        onClickAddHashtagToOffer={() => {}}
        onClickCloseAttractionModal={() => {}}
        onClickCloseHashtagModal={() => {}}
        onSubmitCreateOffer={onSubmitCreateOffer}
      />
    </StyledComponentsProvider>
  );
};
