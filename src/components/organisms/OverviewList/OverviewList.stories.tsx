import { Meta, StoryObj } from '@storybook/react';

import { OverviewListItem } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const meta: Meta<typeof OverviewList> = {
  title: 'Organisms/OverviewList',
  component: OverviewList,
};

export default meta;
type Story = StoryObj<typeof OverviewList>;

const data = [
  { id: 1, name: 'attraction1' },
  { id: 2, name: 'attraction2' },
  { id: 3, name: 'attraction3' },
  { id: 4, name: 'attraction4' },
  { id: 5, name: 'attraction5' },
];

export const OverviewListWithoutItems: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OverviewList
        navigateLabel="Dodaj atrakcję"
        noItemsLabel="Brak atrakcji w systemie"
        page="1"
        title="Atrakcje"
        onClickNavigate={() => console.log('onClickNavigate')}
      >
        {null}
      </OverviewList>
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
        onClickNavigate={() => console.log('onClickNavigate')}
      >
        {data.map(({ id, name }) => (
          <OverviewListItem
            key={`${id}-${name}`}
            buttonDataTestID={`overview-list-item-${id}`}
            name={name}
            onClickNavigate={() => console.log('onClickNavigate!')}
          />
        ))}
      </OverviewList>
    </StyledComponentsProvider>
  ),
};
