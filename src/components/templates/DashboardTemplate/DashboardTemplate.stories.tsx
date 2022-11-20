import { StyledComponentsProvider } from '~/styles';

import { DashboardTemplate } from './DashboardTemplate.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DashboardTemplate> = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate,
};

export default meta;
type Story = StoryObj<typeof DashboardTemplate>;

export const DashboardTemplateStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <DashboardTemplate version="0.0.1" />
    </StyledComponentsProvider>
  ),
};
