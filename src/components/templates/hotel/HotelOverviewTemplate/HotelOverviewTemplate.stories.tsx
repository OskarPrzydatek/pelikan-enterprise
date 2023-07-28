import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { HotelOverviewTemplate } from './HotelOverviewTemplate';

const meta: Meta<typeof HotelOverviewTemplate> = {
  title: 'Templates/HotelOverviewTemplate',
  component: HotelOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof HotelOverviewTemplate>;

export const HotelOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <HotelOverviewTemplate
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
