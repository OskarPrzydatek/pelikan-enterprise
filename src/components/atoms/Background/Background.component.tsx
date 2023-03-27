import ReactDOM from 'react-dom';

import * as S from './Background.styles';

interface IBackground {
  children: React.ReactNode;
  dataTestID?: string;
  onClickBackground?: () => void;
}

export const Background: React.FC<IBackground> = ({
  children,
  dataTestID,
  onClickBackground,
}: IBackground) => {
  const handleOnClickBackground = (event: React.MouseEvent) => {
    event.preventDefault();

    if (event.target === event.currentTarget && onClickBackground) {
      onClickBackground();
    }
  };

  return ReactDOM.createPortal(
    <S.Background data-testid={dataTestID} onClick={handleOnClickBackground}>
      {children}
    </S.Background>,
    document.body
  );
};
