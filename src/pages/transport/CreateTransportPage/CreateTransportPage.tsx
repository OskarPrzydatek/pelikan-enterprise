import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateTransportTemplate } from '~/components/templates';
import { ITransport } from '~/models';

export const CreateTransportPage: React.FC = () => {
  const methods = useForm<ITransport>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<ITransport> = (data) => console.log(data);

  return (
    <CreateTransportTemplate
      createTransportFormMethods={methods}
      fromOptions={[
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ]}
      toOptions={[
        { value: 'PLACE_A', label: 'Miejsce A' },
        { value: 'PLACE_B', label: 'Miejsce B' },
      ]}
      transportKindOptions={[
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
        { value: 'TRANSPORT_C', label: 'Transport C' },
      ]}
      onSubmitCreateTransport={methods.handleSubmit(onSubmit)}
    />
  );
};
