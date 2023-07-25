import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateAttractionTemplate } from '~/components/templates';

interface IAttraction {
  attractionName: string;
  price: number;
  description: string;
}

export const CreateAttractionPage: React.FC = () => {
  const methods = useForm<IAttraction>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IAttraction> = (data) => console.log(data);

  return (
    <CreateAttractionTemplate
      createAttractionFormMethods={methods}
      onSubmitCreateAttraction={methods.handleSubmit(onSubmit)}
    />
  );
};
