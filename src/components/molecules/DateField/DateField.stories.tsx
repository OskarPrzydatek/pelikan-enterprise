import { DateField } from './DateField.component';
import { DateFieldHelper } from './DateField.helper';

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
