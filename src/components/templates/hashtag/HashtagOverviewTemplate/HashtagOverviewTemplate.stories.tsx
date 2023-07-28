import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { HashtagOverviewTemplate } from './HashtagOverviewTemplate';

const meta: Meta<typeof HashtagOverviewTemplate> = {
  title: 'Templates/HashtagOverviewTemplate',
  component: HashtagOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof HashtagOverviewTemplate>;

export const HashtagOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <HashtagOverviewTemplate
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
