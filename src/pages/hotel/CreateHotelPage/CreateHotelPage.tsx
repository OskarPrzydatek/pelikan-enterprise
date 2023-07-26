import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateHotelTemplate } from '~/components/templates';
import { IHotel } from '~/models';

export const CreateHotelPage: React.FC = () => {
  const methods = useForm<IHotel>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IHotel> = (data) => console.log(data);

  return (
    <CreateHotelTemplate
      createHotelFormMethods={methods}
      onSubmitCreateHotel={methods.handleSubmit(onSubmit)}
    />
  );
};
