import { TextAreaHelper } from '~/helpers';

import { TextArea } from './TextArea.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaStory: Story = {
  render: () => <TextAreaHelper />,
};

export const ValidatedTextAreaStory: Story = {
  render: () => <TextAreaHelper isError />,
};
