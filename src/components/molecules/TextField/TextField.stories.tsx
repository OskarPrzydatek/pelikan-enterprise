import { TextFieldHooked } from '~/helpers';

import { TextField } from './TextField.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'Molecules/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldStory: Story = {
  render: () => <TextFieldHooked />,
};

export const ValidatedTextFieldStory: Story = {
  render: () => <TextFieldHooked isError />,
};
