import { ProfilePicture } from '~/components/molecules';

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu.component';

import * as S from './HeaderBar.styles';

export const HeaderBar: React.FC = () => {
  return (
    <S.HeaderBar>
      <HamburgerMenu />
      <ProfilePicture label="Witaj User" />
    </S.HeaderBar>
  );
};
