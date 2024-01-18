import { toast } from 'react-toastify';

import { theme } from '~/styles';

const notificationsSetup = {
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const successNotification = (message: string) => {
  toast(message, {
    position: 'top-right',
    progressStyle: {
      background: theme.colors.darkBlue,
    },
    ...notificationsSetup,
  });
};

export const errorNotification = (message?: string) => {
  const errorMessage = message ?? 'Coś poszło nie tak';

  toast.error(errorMessage, {
    position: 'top-right',
    ...notificationsSetup,
  });
};
