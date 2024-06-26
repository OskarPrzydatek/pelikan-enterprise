import { ReactComponent as AddIcon } from '~/assets/svg/add_icon.svg';
import { ReactComponent as ArrowIcon } from '~/assets/svg/arrow_icon.svg';
import { ReactComponent as ChevronIcon } from '~/assets/svg/chevron_icon.svg';
import { ReactComponent as CloseIcon } from '~/assets/svg/close_icon.svg';
import { ReactComponent as DeleteIcon } from '~/assets/svg/delete_icon.svg';
import { ReactComponent as EditIcon } from '~/assets/svg/edit_icon.svg';
import { ReactComponent as HamburgerIcon } from '~/assets/svg/hamburger_icon.svg';
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
  css,
  dataTestID,
  onClick,
}: IIcon) => {
  const renderIconByType = () => {
    switch (icon) {
      case Icons.ADD: {
        return <AddIcon data-testid="add-icon" height={height} width={width} />;
      }
      case Icons.ARROW: {
        return (
          <ArrowIcon data-testid="arrow-icon" height={height} width={width} />
        );
      }
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
      case Icons.DELETE: {
        return (
          <DeleteIcon data-testid="delete-icon" height={height} width={width} />
        );
      }
      case Icons.EDIT: {
        return (
          <EditIcon data-testid="edit-icon" height={height} width={width} />
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
      <S.ClickableIcon css={css} data-testid={dataTestID} onClick={onClick}>
        {renderIconByType()}
      </S.ClickableIcon>
    );
  }

  return <S.IconWrapper css={css}>{renderIconByType()}</S.IconWrapper>;
};
