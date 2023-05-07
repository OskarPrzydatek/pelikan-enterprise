import { ReactComponent as ChevronIcon } from '~/assets/chevron_icon.svg';
import { ReactComponent as CloseIcon } from '~/assets/close_icon.svg';
import { ReactComponent as HamburgerIcon } from '~/assets/hamburger_icon.svg';
import { Icons } from '~/constants';
import { IComponent } from '~/models';

import * as S from './Icon.styles';

interface IIcon extends IComponent {
  icon: Icons;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const Icon: React.FC<IIcon> = ({
  icon,
  width = 20,
  height,
  dataTestID,
  onClick,
}: IIcon) => {
  const renderIconByType = () => {
    switch (icon) {
      case Icons.CHEVRON: {
        return (
          <ChevronIcon
            data-testid="chevron-icon"
            height={height}
            width={width}
          />
        );
      }
      case Icons.CLOSE: {
        return (
          <CloseIcon data-testid="close-icon" height={height} width={width} />
        );
      }
      case Icons.HAMBURGER: {
        return (
          <HamburgerIcon
            data-testid="hamburger-icon"
            height={height}
            width={width}
          />
        );
      }
      default: {
        return null;
      }
    }
  };

  if (onClick) {
    return (
      <S.ClickableIcon data-testid={dataTestID} onClick={onClick}>
        {renderIconByType()}
      </S.ClickableIcon>
    );
  }

  return <>{renderIconByType()}</>;
};
