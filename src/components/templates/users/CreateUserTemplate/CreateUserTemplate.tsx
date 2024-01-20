import { UseFormReturn } from 'react-hook-form';

import { Select, TextField } from '~/components/molecules';
import { Form } from '~/components/organisms';
import { ISelectOption } from '~/models';
import { IUser } from '~/models/forms';
import { PageLayout } from '~/styles';
import { emailValidator, requiredValidator } from '~/validators';

interface ICreateUserTemplate {
  createUserFormMethods: UseFormReturn<IUser>;
  userRoleOptions: ISelectOption[];
  onSubmitCreateUser: () => void;
}

export const CreateUserTemplate: React.FC<ICreateUserTemplate> = ({
  createUserFormMethods,
  userRoleOptions,
  onSubmitCreateUser,
}: ICreateUserTemplate) => {
  return (
    <PageLayout>
      <Form
        methods={createUserFormMethods}
        submitLabel="Dodaj"
        title="Dodaj użytkownika"
        onSubmit={onSubmitCreateUser}
      >
        <TextField
          errorMessageTestID="create-user-email-error"
          inputTestID="create-user-email"
          label="Email"
          name="email"
          registerOptions={{
            ...emailValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-user-first-name-error"
          inputTestID="create-user-first-name"
          label="Imię"
          name="firstName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-user-last-name-error"
          inputTestID="create-user-last-name"
          label="Nazwisko"
          name="lastName"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-user-password-error"
          inputTestID="create-user-password"
          label="Hasło"
          name="password"
          type="password"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <TextField
          errorMessageTestID="create-user-phone-number-error"
          inputTestID="create-user-phone-number"
          label="Nr. telefonu"
          name="phoneNumber"
          registerOptions={{
            ...requiredValidator,
          }}
        />
        <Select
          errorMessageTestID="create-user-type-error"
          label="Rola użytkownika"
          name="userType"
          selectOptions={userRoleOptions}
          selectTestID="create-transport-transport-kind"
          registerOptions={{
            ...requiredValidator,
          }}
        />
      </Form>
    </PageLayout>
  );
};
