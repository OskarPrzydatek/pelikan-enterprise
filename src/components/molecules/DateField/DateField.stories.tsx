import { DateField } from './DateField';
import { DateFieldHelper } from './DateFieldHelper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateField> = {
  title: 'Molecules/DateField',
  component: DateField,
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const DateFieldStory: Story = {
  render: () => <DateFieldHelper />,
};

export const ValidatedDateFieldStory: Story = {
  render: () => <DateFieldHelper isError />,
};
