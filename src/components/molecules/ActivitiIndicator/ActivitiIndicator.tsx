import { Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './ActivitiIndicator.styles';

interface IActivitiIndicator extends IComponent {
  label: string;
}

export const ActivitiIndicator: React.FC<IActivitiIndicator> = ({
  label,
  dataTestID,
}: IActivitiIndicator) => {
  return (
    <Text css={S.labelCSS} dataTestID={dataTestID}>
      {label}
    </Text>
  );
};
