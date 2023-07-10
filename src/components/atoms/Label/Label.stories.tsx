import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const LabelStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Label htmlFor="label">Label</Label>
    </StyledComponentsProvider>
  ),
};
