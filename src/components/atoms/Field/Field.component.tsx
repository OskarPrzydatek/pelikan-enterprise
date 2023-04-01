import { IComponent } from '~/models';

import * as S from './Field.styles';

interface IField extends IComponent {
  id: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Field: React.FC<IField> = ({
  id,
  placeholder,
  css,
  dataTestID,
  onChange,
  onFocus,
  onBlur,
}: IField) => {
  return (
    <S.Field
      css={css}
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
