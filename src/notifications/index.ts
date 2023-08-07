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

export const errorNotification = () => {
  toast.error('Coś poszło nie tak', {
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
