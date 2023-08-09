import { toast } from 'react-toastify';

import { theme } from '~/styles';

export const successNotification = (message: string) => {
  toast(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    progressStyle: {
      background: theme.colors.darkBlue,
    },
  });
};

export const errorNotification = (message?: string) => {
  const errorMessage = message ?? 'Coś poszło nie tak';

  toast.error(errorMessage, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
