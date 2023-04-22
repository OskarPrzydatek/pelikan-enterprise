import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { CreateTemplate } from '~/components/templates';
import { useFormMetadata } from '~/hooks';
import { IFieldMetadata } from '~/models';

export const Create: React.FC = () => {
  const methods = useForm();
  const { pathname } = useLocation();
  const { title, fields, submitLabel } = useFormMetadata(pathname);

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  // TODO: Remove when truly used
  // eslint-disable-next-line no-console
  console.log(pathname);

  return (
    <CreateTemplate
      fields={fields as IFieldMetadata[]}
      methods={methods}
      submitLabel={submitLabel}
      title={title}
      onSubmit={onSubmit}
    />
  );
};
