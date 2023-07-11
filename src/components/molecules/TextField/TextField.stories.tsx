import { TextField } from './TextField';
import { TextFieldHelper } from './TextFieldHelper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'Molecules/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldStory: Story = {
  render: () => <TextFieldHelper />,
};

export const ValidatedTextFieldStory: Story = {
  render: () => <TextFieldHelper isError />,
};
