import { Meta, StoryObj } from '@storybook/react';

import { transportDataMock } from '~/mocks';
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
        data={transportDataMock}
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
