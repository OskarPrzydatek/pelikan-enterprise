import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { IComponent } from '~/models';

import {
  numericValidator,
  requiredValidator,
  starsValidator,
} from './validators';

export enum FieldRenderTypeEnum {
  TEXT_FIELD = 'TEXT_FIELD',
  NUMERIC_FIELD = 'NUMERIC_FIELD',
  STAR_FIELD = 'STAR_FIELD',
  TEXT_AREA = 'TEXT_AREA',
  SELECT = 'SELECT',
  DATE = 'DATE',
}

interface IFieldRenderer extends IComponent {
  type: FieldRenderTypeEnum;
  name: string;
  label: string;
  selectOptions?: { label: string; value: string }[];
}

export const FieldRenderer: React.FC<IFieldRenderer> = ({
  type,
  name,
  label,
  selectOptions = [],
  dataTestID,
}: IFieldRenderer) => {
  switch (type) {
    case FieldRenderTypeEnum.TEXT_FIELD:
      return (
        <TextField
          inputTestID={dataTestID}
          label={label}
          name={name}
          registerOptions={{
            ...requiredValidator,
          }}
        />
      );
    case FieldRenderTypeEnum.NUMERIC_FIELD:
      return (
        <TextField
          inputTestID={dataTestID}
          label={label}
          name={name}
          registerOptions={{
            ...numericValidator,
          }}
        />
      );
    case FieldRenderTypeEnum.STAR_FIELD:
      return (
        <TextField
          inputTestID={dataTestID}
          label={label}
          name={name}
          registerOptions={{
            ...starsValidator,
          }}
        />
      );
    case FieldRenderTypeEnum.TEXT_AREA:
      return (
        <TextArea
          label={label}
          name={name}
          textareaTestID={dataTestID}
          registerOptions={{
            ...requiredValidator,
          }}
        />
      );
    case FieldRenderTypeEnum.SELECT:
      return (
        <Select
          label={label}
          name={name}
          selectOptions={selectOptions}
          selectTestID={dataTestID}
          registerOptions={{
            ...requiredValidator,
          }}
        />
      );
    case FieldRenderTypeEnum.DATE:
      return (
        <DateField
          inputTestID={dataTestID}
          label={label}
          name={name}
          registerOptions={{
            ...requiredValidator,
          }}
        />
      );
    default:
      return null;
  }
};
