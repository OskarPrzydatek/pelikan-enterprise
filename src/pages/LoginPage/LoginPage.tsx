import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginPageTemplate } from '~/components/templates';
import { ILogin } from '~/models/forms';

export const LoginPage: React.FC = () => {
  const methods = useForm<ILogin>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
  };

  return (
    <LoginPageTemplate
      loginFormMethods={methods}
      onSubmitLogin={methods.handleSubmit(onSubmit)}
    />
  );
};
