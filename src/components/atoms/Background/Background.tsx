import ReactDOM from 'react-dom';

import { IComponent } from '~/models';

import * as S from './Background.styles';

interface IBackground extends IComponent {
  children: React.ReactNode;
  onClickBackground?: () => void;
}

export const Background: React.FC<IBackground> = ({
  children,
  css,
  dataTestID,
  onClickBackground,
}: IBackground) => {
  const handleOnClickBackground = (event: React.MouseEvent) => {
    event.preventDefault();

    const isOnClickBackground =
      event.target === event.currentTarget && onClickBackground;

    if (isOnClickBackground) {
      onClickBackground();
    }
  };

  return ReactDOM.createPortal(
    <S.Background
      css={css}
      data-testid={dataTestID}
      onClick={handleOnClickBackground}
    >
      {children}
    </S.Background>,
    document.body
  );
};
