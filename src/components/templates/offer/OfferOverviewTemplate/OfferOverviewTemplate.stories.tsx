import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { OfferOverviewTemplate } from './OfferOverviewTemplate';

const meta: Meta<typeof OfferOverviewTemplate> = {
  title: 'Templates/OfferOverviewTemplate',
  component: OfferOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof OfferOverviewTemplate>;

export const OfferOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OfferOverviewTemplate
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
