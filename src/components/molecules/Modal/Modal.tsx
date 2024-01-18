import { Background, Button, Icon } from '~/components/atoms';
import { Icons } from '~/constants';
import { IComponent } from '~/models';

import * as S from './Modal.styles';

interface IModal extends IComponent {
  acceptLabel: string;
  children: React.ReactNode;
  closeIconTestID?: string;
  acceptButtonTestID?: string;
  onClickAccept: () => void;
  onClickClose: () => void;
}

export const Modal: React.FC<IModal> = ({
  acceptLabel,
  children,
  dataTestID,
  acceptButtonTestID,
  closeIconTestID,
  onClickAccept,
  onClickClose,
}: IModal) => {
  return (
    <Background
      css={S.backgroundCSS}
      dataTestID={`${dataTestID!}-background`}
      onClickBackground={onClickClose}
    >
      <S.Modal data-testid={dataTestID}>
        <Icon
          css={S.closeIconCSS}
          dataTestID={closeIconTestID}
          icon={Icons.CLOSE}
          onClick={onClickClose}
        />
        {children}
        <Button
          css={S.acceptButtonCSS}
          dataTestID={acceptButtonTestID}
          onClick={onClickAccept}
        >
          {acceptLabel}
        </Button>
      </S.Modal>
    </Background>
  );
};
