import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { FieldRenderer, Form } from '~/components/organisms';
import { useFormMetadata } from '~/hooks';
import { PageLayout } from '~/styles';

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
    <PageLayout>
      <FormProvider {...methods}>
        <Form
          submitLabel={submitLabel}
          title={title}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {fields.map(({ type, name, label, selectOptions }) => (
            <FieldRenderer
              key={`${name}-${label}`}
              label={label}
              name={name}
              selectOptions={selectOptions}
              type={type}
            />
          ))}
        </Form>
      </FormProvider>
    </PageLayout>
  );
};
