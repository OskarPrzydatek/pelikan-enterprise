import { useForm } from 'react-hook-form';

import { CreateHotelTemplate } from '~/components/templates';
import { IHotel } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateHotelTemplateHelper {
  onSubmitCreateHotel: () => void;
}

export const CreateHotelTemplateHelper: React.FC<
  ICreateHotelTemplateHelper
> = ({ onSubmitCreateHotel }: ICreateHotelTemplateHelper) => {
  const methods = useForm<IHotel>();

  return (
    <StyledComponentsProvider>
      <CreateHotelTemplate
        createHotelFormMethods={methods}
        onSubmitCreateHotel={onSubmitCreateHotel}
      />
    </StyledComponentsProvider>
  );
};
