import React from 'react';

import { ProfilePicture } from '~/components/molecules';
import { ILoggedUser } from '~/models/data';

import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import * as S from './HeaderBar.styles';

export const HeaderBar: React.FC = () => {
  const loggedUser = localStorage.getItem('loggedUser');

  const [loggedUserJSON, setLoggedUserJSON] = React.useState<ILoggedUser>({
    firstName: 'Uzytkowniku',
    lastName: '',
    userType: 'WORKER',
  });

  React.useEffect(() => {
    if (loggedUser !== null) {
      setLoggedUserJSON(JSON.parse(loggedUser) as ILoggedUser);
    }
  }, [loggedUser]);

  return (
    <S.HeaderBar>
      <HamburgerMenu />
      <ProfilePicture
        label={`Witaj ${loggedUserJSON.firstName} ${loggedUserJSON.lastName}`}
      />
    </S.HeaderBar>
  );
};
