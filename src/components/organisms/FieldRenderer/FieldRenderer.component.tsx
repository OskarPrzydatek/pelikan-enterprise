import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { FieldType } from '~/constants';
import { IComponent } from '~/models';
import {
  numericValidator,
  requiredValidator,
  starsValidator,
} from '~/validators';

interface IFieldRenderer extends IComponent {
  type: FieldType;
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
    case FieldType.TEXT_FIELD:
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
    case FieldType.NUMERIC_FIELD:
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
    case FieldType.STAR_FIELD:
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
    case FieldType.TEXT_AREA:
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
    case FieldType.SELECT:
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
    case FieldType.DATE:
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
