import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldType } from '~/constants';
import { StyledComponentsProvider } from '~/styles';

import { FieldRenderer } from './FieldRenderer.component';

interface IFieldRendererHelper {
  type: FieldType;
  name: string;
  selectOptions?: { label: string; value: string }[];
  dataTestID?: string;
}

export const FieldRendererHelper: React.FC<IFieldRendererHelper> = ({
  type,
  name,
  selectOptions = [],
  dataTestID,
}: IFieldRendererHelper) => {
  const methods = useForm();

  return (
    <StyledComponentsProvider>
      <FormProvider {...methods}>
        <FieldRenderer
          dataTestID={dataTestID}
          label="Field renderer"
          name={name}
          selectOptions={selectOptions}
          type={type}
        />
      </FormProvider>
    </StyledComponentsProvider>
  );
};
