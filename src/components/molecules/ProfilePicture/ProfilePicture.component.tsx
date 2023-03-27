import { useTheme } from 'styled-components';

import ProfilePictureSrc from '~/assets/profile_picture.png';
import { Text } from '~/components/atoms';

import * as S from './ProfilePicture.styles';

interface IProfilePicture {
  label: string;
}

export const ProfilePicture: React.FC<IProfilePicture> = ({
  label,
}: IProfilePicture) => {
  const theme = useTheme();

  const textStyle = {
    color: theme.colors.darkBlue,
    fontWeight: '700',
  };

  return (
    <S.ProfilePicture>
      <Text style={textStyle}>{label}</Text>
      <S.Image alt="profile" src={ProfilePictureSrc} />
    </S.ProfilePicture>
  );
};
