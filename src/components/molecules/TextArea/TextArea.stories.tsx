import { TextAreaHooked } from '~/helpers';

import { TextArea } from './TextArea.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaStory: Story = {
  render: () => <TextAreaHooked />,
};

export const ValidatedTextAreaStory: Story = {
  render: () => <TextAreaHooked isError />,
};
