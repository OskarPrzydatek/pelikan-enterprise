import { Button, Icon } from '~/components/atoms';
import { Icons } from '~/constants';

import * as S from './OverviewListItem.styles';

interface IOverviewListItem {
  name: string;
  buttonDataTestID?: string;
  onClickNavigate: () => void;
}

export const OverviewListItem: React.FC<IOverviewListItem> = ({
  name,
  buttonDataTestID,
  onClickNavigate,
}: IOverviewListItem) => {
  return (
    <S.OverviewListItem>
      <Button
        dataTestID={buttonDataTestID}
        variant="ghost"
        onClick={onClickNavigate}
      >
        {name}
      </Button>
      <S.IconsWrapper>
        <Icon css={S.iconCSS} height={20} icon={Icons.EDIT} width={20} />
        <Icon css={S.iconCSS} height={20} icon={Icons.DELETE} width={20} />
      </S.IconsWrapper>
    </S.OverviewListItem>
  );
};
