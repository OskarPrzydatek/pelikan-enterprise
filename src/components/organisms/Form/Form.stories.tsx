import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { TextField } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Organisms/Form',
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

const FormHelper: React.FC<{ isError?: boolean }> = ({ isError }) => {
  const methods = useForm<{ name: string }>();

  React.useEffect(() => {
    if (isError)
      methods.setError('name', {
        type: 'required',
        message: 'This is required',
      });
  }, [isError, methods]);

  return (
    <StyledComponentsProvider>
      <Form
        methods={methods}
        submitLabel="Submit Label"
        title="Form Helper"
        onSubmit={() => console.log('on submit')}
      >
        <TextField label="Name" name="name" registerOptions={{}} />
      </Form>
    </StyledComponentsProvider>
  );
};

export const FormStory: Story = {
  render: () => <FormHelper />,
};
