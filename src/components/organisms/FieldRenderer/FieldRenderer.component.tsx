import { DateField, Select, TextArea, TextField } from '~/components/molecules';
import { Fields } from '~/constants';
import { IComponent } from '~/models';
import {
  numericValidator,
  requiredValidator,
  starsValidator,
} from '~/validators';

interface IFieldRenderer extends IComponent {
  type: Fields;
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
    case Fields.TEXT_FIELD:
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
    case Fields.NUMERIC_FIELD:
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
    case Fields.STAR_FIELD:
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
    case Fields.TEXT_AREA:
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
    case Fields.SELECT:
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
    case Fields.DATE:
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
