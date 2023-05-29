import { useForm } from 'react-hook-form';

import { CreateTransportTemplate } from '~/components/templates';
import { ITransport } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateTransportTemplateHelper {
  onSubmitCreateTransport: () => void;
}

export const CreateTransportTemplateHelper: React.FC<
  ICreateTransportTemplateHelper
> = ({ onSubmitCreateTransport }: ICreateTransportTemplateHelper) => {
  const methods = useForm<ITransport>();

  return (
    <StyledComponentsProvider>
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
        onSubmitCreateTransport={onSubmitCreateTransport}
      />
    </StyledComponentsProvider>
  );
};
