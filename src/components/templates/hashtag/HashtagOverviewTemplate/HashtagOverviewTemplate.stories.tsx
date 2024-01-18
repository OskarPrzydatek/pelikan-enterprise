import { Meta, StoryObj } from '@storybook/react';

import { hashtagDataMock } from '~/mocks';
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
        data={hashtagDataMock}
        error={undefined}
        isLoading={false}
        onClickDelete={() => console.log('onClickDelete!')}
        onClickEdit={() => console.log('onClickEdit!')}
        onClickNavigateToCreatePage={() =>
          console.log('onClickNavigateToCreatePage!')
        }
      />
    </StyledComponentsProvider>
  ),
};
