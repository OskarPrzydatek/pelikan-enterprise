import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const meta: Meta<typeof OverviewList> = {
  title: 'Organisms/OverviewList',
  component: OverviewList,
};

export default meta;
type Story = StoryObj<typeof OverviewList>;

export const OverviewListWithoutItems: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OverviewList
        items={[]}
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page="1"
        title="Atrakcje"
        onClickItem={() => console.log('onClickItem')}
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};

export const OverviewListWithItems: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page="1"
        title="Atrakcje"
        items={[
          { id: 1, name: 'attraction1' },
          { id: 2, name: 'attraction2' },
          { id: 3, name: 'attraction3' },
          { id: 4, name: 'attraction4' },
          { id: 5, name: 'attraction5' },
        ]}
        onClickItem={() => console.log('onClickItem')}
        onClickNavigate={() => console.log('onClickNavigate')}
      />
    </StyledComponentsProvider>
  ),
};
