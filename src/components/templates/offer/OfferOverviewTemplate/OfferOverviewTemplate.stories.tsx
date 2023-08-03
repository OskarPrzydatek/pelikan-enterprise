import { Meta, StoryObj } from '@storybook/react';

import { offerDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { OfferOverviewTemplate } from './OfferOverviewTemplate';

const meta: Meta<typeof OfferOverviewTemplate> = {
  title: 'Templates/OfferOverviewTemplate',
  component: OfferOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof OfferOverviewTemplate>;

export const OfferOverviewTemplatePrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <OfferOverviewTemplate
        data={offerDataMock}
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
