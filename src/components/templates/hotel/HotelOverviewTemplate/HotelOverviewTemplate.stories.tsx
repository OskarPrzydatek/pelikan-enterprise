import { Meta, StoryObj } from '@storybook/react';

import { hotelDataMock } from '~/mocks';
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
        data={hotelDataMock}
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
