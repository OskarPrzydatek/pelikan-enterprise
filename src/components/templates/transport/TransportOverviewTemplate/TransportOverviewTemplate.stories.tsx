import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { TransportOverviewTemplate } from './TransportOverviewTemplate';

const meta: Meta<typeof TransportOverviewTemplate> = {
  title: 'Templates/TransportOverviewTemplate',
  component: TransportOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof TransportOverviewTemplate>;

export const TransportOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <TransportOverviewTemplate
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
