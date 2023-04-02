import { IComponent } from '~/models';

import * as S from './Field.styles';

interface IField extends IComponent {
  id: string;
  placeholder: string;
  type?: 'text' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Field: React.FC<IField> = ({
  id,
  placeholder,
  type = 'text',
  css,
  dataTestID,
  onChange,
  onFocus,
  onBlur,
}: IField) => {
  const preventSigns = ['e', 'E', '+', '-'];

  const onKeyDownPreventSigns = (event: React.KeyboardEvent) => {
    if (type === 'number' && preventSigns.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <S.Field
      css={css}
      data-testid={dataTestID}
      id={id}
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDownPreventSigns}
    />
  );
};
