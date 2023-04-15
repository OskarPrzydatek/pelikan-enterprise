import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Header } from '~/components/atoms';
import { TextField } from '~/components/molecules';

import * as S from './Form.styles';

enum RenderFieldEnum {
  TEXT_INPUT = 'TEXT_INPUT',
  NUMERIC_FIELD = 'NUMERIC_FIELD',
}

interface ICreateHashtag {
  hashtagName: string;
}

const createHashtagFormMetadata = {
  title: 'Dodaj Hashtag',
  fields: [
    {
      type: RenderFieldEnum.TEXT_INPUT,
      name: 'hashtagName',
      label: 'Nazwa Hashtagu',
    },
  ],
  submitLabel: 'Dodaj Hashtag',
};

const SubmitButton: React.FC<{ label: string }> = ({
  label,
}: {
  label: string;
}) => {
  return <S.SubmitButton type="submit" value={label} />;
};

interface IFieldRenderer {
  type: RenderFieldEnum;
  name: string;
  label: string;
}

const FieldRenderer: React.FC<IFieldRenderer> = ({
  type,
  name,
  label,
}: IFieldRenderer) => {
  if (type === RenderFieldEnum.TEXT_INPUT)
    return <TextField label={label} name={name} />;

  return null;
};

export const Form: React.FC = () => {
  const { title, fields, submitLabel } = createHashtagFormMetadata;

  const methods = useForm<ICreateHashtag>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<ICreateHashtag> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header>{title}</Header>
        {fields.map(({ type, name, label }) => (
          <FieldRenderer
            key={`${name}-${label}`}
            label={label}
            name={name}
            type={type}
          />
        ))}
        <SubmitButton label={submitLabel} />
      </S.Form>
    </FormProvider>
  );
};
