import { Meta, StoryObj } from '@storybook/react';

import { attractionDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { AttractionOverviewTemplate } from './AttractionOverviewTemplate';

const meta: Meta<typeof AttractionOverviewTemplate> = {
  title: 'Templates/AttractionOverviewTemplate',
  component: AttractionOverviewTemplate,
};

export default meta;
type Story = StoryObj<typeof AttractionOverviewTemplate>;

export const AttractionOverviewTemplatePrimmary: Story = {
  render: () => {
    return (
      <StyledComponentsProvider>
        <AttractionOverviewTemplate
          data={attractionDataMock}
          error={undefined}
          isLoading={false}
          onClickDelete={() => console.log('onClickDelete!')}
          onClickEdit={() => console.log('onClickEdit!')}
          onClickNavigateToCreatePage={() =>
            console.log('onClickNavigateToCreatePage!')
          }
        />
      </StyledComponentsProvider>
    );
  },
};
