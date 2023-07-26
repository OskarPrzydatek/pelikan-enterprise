import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateHashtagTemplate } from '~/components/templates';
import { IHashtag } from '~/models';

export const CreateHashtagPage: React.FC = () => {
  const methods = useForm<IHashtag>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IHashtag> = (data) => console.log(data);

  return (
    <CreateHashtagTemplate
      creatHashtagFormMethods={methods}
      onSubmitCreateHashtag={methods.handleSubmit(onSubmit)}
    />
  );
};
