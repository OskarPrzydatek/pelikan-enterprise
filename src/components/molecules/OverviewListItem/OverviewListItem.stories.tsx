import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { OverviewListItem } from './OverviewListItem';

const meta: Meta<typeof OverviewListItem> = {
  title: 'Molecules/OverviewListItem',
  component: OverviewListItem,
};

export default meta;
type Story = StoryObj<typeof OverviewListItem>;

export const OverviewListItemStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OverviewListItem
        id={1}
        name="Item"
        onClickDelete={() => console.log('onClickDelete')}
        onClickEdit={() => console.log('onClickEdit')}
      />
    </StyledComponentsProvider>
  ),
};
