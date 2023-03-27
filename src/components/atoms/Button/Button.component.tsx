import * as S from './Button.styles';

interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: React.CSSProperties | undefined;
  dataTestID?: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  style,
  dataTestID,
  onClick,
}: IButton) => {
  return (
    <S.Button
      data-testid={dataTestID}
      style={style}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
