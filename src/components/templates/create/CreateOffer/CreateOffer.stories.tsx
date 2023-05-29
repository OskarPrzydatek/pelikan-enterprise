import { Meta, StoryObj } from '@storybook/react';

import { CreateOfferTemplateHelper } from '~/helpers';

import { CreateOfferTemplate } from './CreateOffer.template';

const meta: Meta<typeof CreateOfferTemplate> = {
  title: 'Templates/CreateOffer',
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
