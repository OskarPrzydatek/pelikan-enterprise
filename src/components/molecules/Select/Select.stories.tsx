import { Select } from './Select';
import { SelectHelper } from './SelectHelper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
  render: () => <SelectHelper />,
};

export const ValidatedSelectStory: Story = {
  render: () => <SelectHelper isError />,
};
