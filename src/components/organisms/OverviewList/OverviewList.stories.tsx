import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const meta: Meta<typeof OverviewList> = {
  title: 'Organisms/OverviewList',
  component: OverviewList,
};

export default meta;
type Story = StoryObj<typeof OverviewList>;

export const OverviewListStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page="1"
        title="Atrakcje"
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
