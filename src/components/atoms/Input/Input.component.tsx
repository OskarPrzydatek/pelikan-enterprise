import * as S from './Input.styles';

interface IInput {
  id: string;
  placeholder: string;
  dataTestID?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IInput> = ({
  id,
  placeholder,
  dataTestID,
  onChange,
  onFocus,
  onBlur,
}: IInput) => {
  return (
    <S.Input
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
