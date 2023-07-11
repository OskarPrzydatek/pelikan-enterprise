import { Meta, StoryObj } from '@storybook/react';

import { CreateOfferTemplate } from './CreateOfferTemplate';
import { CreateOfferTemplateHelper } from './CreateOfferTemplateHelper';

const meta: Meta<typeof CreateOfferTemplate> = {
  title: 'Templates/CreateOfferTemplate',
  component: CreateOfferTemplate,
};

export default meta;
type Story = StoryObj<typeof CreateOfferTemplate>;

export const CreateOfferTemplatePrimmary: Story = {
  render: () => (
    <CreateOfferTemplateHelper
      onSubmitCreateOffer={() => console.log('Create Offer')}
    />
  ),
};
