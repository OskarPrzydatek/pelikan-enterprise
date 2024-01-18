import { StyledComponentsProvider } from '~/providers';

import { ActivitiIndicator } from './ActivitiIndicator';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActivitiIndicator> = {
  title: 'Molecules/ActivitiIndicator',
  component: ActivitiIndicator,
};

export default meta;
type Story = StoryObj<typeof ActivitiIndicator>;

export const ActivitiIndicatorStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <ActivitiIndicator label="Ładuję" />
    </StyledComponentsProvider>
  ),
};
