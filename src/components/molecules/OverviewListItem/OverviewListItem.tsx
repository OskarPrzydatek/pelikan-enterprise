import { Icon, Text } from '~/components/atoms';
import { Icons } from '~/constants';
import { IComponent } from '~/models';

import * as S from './OverviewListItem.styles';

interface IOverviewListItem extends IComponent {
  id: number;
  name: string;
  editIconTestID?: string;
  deleteIconTestID?: string;
  onClickEdit: (id: number) => void;
  onClickDelete: () => void;
}

export const OverviewListItem: React.FC<IOverviewListItem> = ({
  id,
  name,
  dataTestID,
  editIconTestID,
  deleteIconTestID,
  onClickEdit,
  onClickDelete,
}: IOverviewListItem) => {
  const handleOnClickEdit = () => onClickEdit(id);

  return (
    <S.OverviewListItem data-testid={dataTestID}>
      <Text>{name}</Text>
      <S.IconsWrapper>
        <Icon
          css={S.iconCSS}
          dataTestID={editIconTestID}
          height={20}
          icon={Icons.EDIT}
          width={20}
          onClick={handleOnClickEdit}
        />
        <Icon
          css={S.iconCSS}
          dataTestID={deleteIconTestID}
          height={20}
          icon={Icons.DELETE}
          width={20}
          onClick={onClickDelete}
        />
      </S.IconsWrapper>
    </S.OverviewListItem>
  );
};
