import { UseFormReturn } from 'react-hook-form';

import { Select, TextField } from '~/components/molecules';
import { ErrorBundaryLoader, Form } from '~/components/organisms';
import { ISelectOption } from '~/models';
import { IUser } from '~/models/forms';
import { emailValidator, requiredValidator } from '~/validators';

interface IEditUserTemplate {
  isLoading: boolean;
  error: Error | undefined;
  editUserFormMethods: UseFormReturn<IUser>;
  userRoleOptions: ISelectOption[];
  onSubmitEditUser: () => void;
}

export const EditUserTemplate: React.FC<IEditUserTemplate> = ({
  isLoading,
  error,
  editUserFormMethods,
  userRoleOptions,
  onSubmitEditUser,
}: IEditUserTemplate) => {
  return (
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Form
        methods={editUserFormMethods}
        submitLabel="Edytuj"
        title="Edytuj użytkownika"
        onSubmit={onSubmitEditUser}
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
    </ErrorBundaryLoader>
  );
};
