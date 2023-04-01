import * as S from './Field.styles';

interface IField {
  id: string;
  placeholder: string;
  dataTestID?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Field: React.FC<IField> = ({
  id,
  placeholder,
  dataTestID,
  onChange,
  onFocus,
  onBlur,
}: IField) => {
  return (
    <S.Field
      data-testid={dataTestID}
      id={id}
      placeholder={placeholder}
      type="text"
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};
