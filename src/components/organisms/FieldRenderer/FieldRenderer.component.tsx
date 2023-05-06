import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { FieldTypeEnum } from '~/constants';
import { IComponent } from '~/models';
import {
  numericValidator,
  requiredValidator,
  starsValidator,
} from '~/validators';

interface IFieldRenderer extends IComponent {
  type: FieldTypeEnum;
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
    case FieldTypeEnum.TEXT_FIELD:
      return (
        <TextField
          errorMessageTestID="field-renderer-text-field-error"
          inputTestID={dataTestID}
          label={label}
          name={name}
          registerOptions={{
            ...requiredValidator,
          }}
        />
      );
    case FieldTypeEnum.NUMERIC_FIELD:
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
    case FieldTypeEnum.STAR_FIELD:
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
    case FieldTypeEnum.TEXT_AREA:
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
    case FieldTypeEnum.SELECT:
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
    case FieldTypeEnum.DATE:
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
