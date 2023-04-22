import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

import { Form } from '~/components/organisms';
import { IFieldMetadata } from '~/models';
import { FieldRenderer } from '~/utils';

import * as S from './CreateTemplate.styles';

interface ICreateTemplate {
  methods: UseFormReturn<FieldValues, unknown>;
  title: string;
  fields: IFieldMetadata[];
  submitLabel: string;
  onSubmit: SubmitHandler<FieldValues>;
}

export const CreateTemplate: React.FC<ICreateTemplate> = ({
  methods,
  title,
  fields,
  submitLabel,
  onSubmit,
}: ICreateTemplate) => {
  return (
    <S.CreateTemplate>
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
    </S.CreateTemplate>
  );
};
