import { TextArea, TextField } from '~/components/molecules';

export enum RenderFieldEnum {
  TEXT_FIELD = 'TEXT_FIELD',
  NUMERIC_FIELD = 'NUMERIC_FIELD',
  STAR_FIELD = 'STAR_FIELD',
  TEXT_AREA = 'TEXT_AREA',
  SELECT = 'SELECT',
}

interface IFieldRenderer {
  type: RenderFieldEnum;
  name: string;
  label: string;
}

export const FieldRenderer: React.FC<IFieldRenderer> = ({
  type,
  name,
  label,
}: IFieldRenderer) => {
  switch (type) {
    case RenderFieldEnum.TEXT_FIELD:
      return (
        <TextField
          label={label}
          name={name}
          registerOptions={{
            required: { value: true, message: 'Pole jest wymagane!' },
          }}
        />
      );
    case RenderFieldEnum.NUMERIC_FIELD:
      return (
        <TextField
          label={label}
          name={name}
          registerOptions={{
            required: { value: true, message: 'Pole jest wymagane!' },
            validate: {
              isNumber: (value: unknown) =>
                (!Number.isNaN(value as number) && Number(value) > 0) ||
                'Pole musi zawierać wartość numeryczną większą od zera!',
            },
          }}
        />
      );
    case RenderFieldEnum.STAR_FIELD:
      return (
        <TextField
          label={label}
          name={name}
          registerOptions={{
            required: { value: true, message: 'Pole jest wymagane!' },
            validate: {
              isNumber: (value: unknown) =>
                (!Number.isNaN(value as number) &&
                  Number(value) > 0 &&
                  Number(value) < 6) ||
                'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!',
            },
          }}
        />
      );
    case RenderFieldEnum.TEXT_AREA:
      return (
        <TextArea
          label={label}
          name={name}
          registerOptions={{
            required: { value: true, message: 'Pole jest wymagane!' },
          }}
        />
      );
      case RenderFieldEnum.SELECT: 
    default:
      return null;
  }
};
