import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { AttractionOverviewTemplate } from './AttractionOverviewTemplate';

const meta: Meta<typeof AttractionOverviewTemplate> = {
  title: 'Templates/AttractionOverviewTemplate',
  component: AttractionOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof AttractionOverviewTemplate>;

export const AttractionOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <AttractionOverviewTemplate
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
