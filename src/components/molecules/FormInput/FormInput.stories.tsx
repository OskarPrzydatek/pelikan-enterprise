import { FormInputHooked } from '~/helpers';

import { FormInput } from './FormInput.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormInput> = {
  title: 'Molecules/FormInput',
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const FormInputStory: Story = {
  render: () => <FormInputHooked />,
};

export const ValidatedFormInputStory: Story = {
  render: () => <FormInputHooked isError />,
};
