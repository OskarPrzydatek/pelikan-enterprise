import DefaultProfilePicture from '~/assets/png/profile_picture.png';
import { Text } from '~/components/atoms';
import { IComponent } from '~/models';

import * as S from './ProfilePicture.styles';

interface IProfilePicture extends IComponent {
  label: string;
}

export const ProfilePicture: React.FC<IProfilePicture> = ({
  label,
}: IProfilePicture) => {
  return (
    <S.ProfilePicture>
      <Text css={S.labelCSS}>{label}</Text>
      <S.Image alt="default profile picture" src={DefaultProfilePicture} />
    </S.ProfilePicture>
  );
};
