import { Icon, Text } from '~/components/atoms';
import { Icons } from '~/constants';
import { IAttractionData, IComponent } from '~/models';

import * as S from './OverviewListItem.styles';

interface IOverviewListItem extends IComponent {
  id: number;
  name: string;
  editIconTestID?: string;
  deleteIconTestID?: string;
  onClickDelete?: (id: number) => void;
  onClickEdit?: (id: number) => void;

  // Mode for adding attractions
  attraction?: IAttractionData;
  onClickAddAttractionToOffer?: (attraction: IAttractionData) => void;
}

export const OverviewListItem: React.FC<IOverviewListItem> = ({
  id,
  name,
  dataTestID,
  editIconTestID,
  deleteIconTestID,
  onClickDelete,
  onClickEdit,

  attraction,
  onClickAddAttractionToOffer,
}: IOverviewListItem) => {
  const handleOnClickDelete = () => onClickDelete?.(id);
  const handleOnClickEdit = () => onClickEdit?.(id);

  return (
    <S.OverviewListItem data-testid={dataTestID}>
      <Text>{name}</Text>
      <S.IconsWrapper>
        {onClickEdit ? (
          <Icon
            css={S.iconCSS}
            dataTestID={editIconTestID}
            height={20}
            icon={Icons.EDIT}
            width={20}
            onClick={handleOnClickEdit}
          />
        ) : null}
        {onClickDelete ? (
          <Icon
            css={S.iconCSS}
            dataTestID={deleteIconTestID}
            height={20}
            icon={Icons.DELETE}
            width={20}
            onClick={handleOnClickDelete}
          />
        ) : null}
        {attraction && onClickAddAttractionToOffer ? (
          <Icon
            css={S.iconCSS}
            height={18}
            icon={Icons.ADD}
            width={18}
            onClick={() => onClickAddAttractionToOffer(attraction)}
          />
        ) : null}
      </S.IconsWrapper>
    </S.OverviewListItem>
  );
};
