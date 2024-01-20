import { UseFormReturn } from 'react-hook-form';

import { TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { ILogin } from '~/models/forms';
import { LoginPageLayout } from '~/styles/layouts';
import { emailValidator, requiredValidator } from '~/validators';

interface ILoginPageTemplate {
  loginFormMethods: UseFormReturn<ILogin>;
  onSubmitLogin: () => void;
}

export const LoginPageTemplate: React.FC<ILoginPageTemplate> = ({
  loginFormMethods,
  onSubmitLogin,
}: ILoginPageTemplate) => {
  return (
    <LoginPageLayout>
      <Form
        methods={loginFormMethods}
        submitLabel="Zalogunj"
        title="Witaj w Pelikan Enterprise"
        onSubmit={onSubmitLogin}
      >
        <TextField
          errorMessageTestID="login-email-error"
          inputTestID="login-email"
          label="Emial"
          name="email"
          registerOptions={{
            ...emailValidator,
          }}
        />
        <TextField
          errorMessageTestID="login-password-error"
          inputTestID="login-password"
          label="Hasło"
          name="password"
          type="password"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </LoginPageLayout>
  );
};
