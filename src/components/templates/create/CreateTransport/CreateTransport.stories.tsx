import { Meta, StoryObj } from '@storybook/react';

import { CreateTransportTemplateHelper } from '~/helpers';

import { CreateTransportTemplate } from './CreateTransport.template';

const meta: Meta<typeof CreateTransportTemplate> = {
  title: 'Templates/CreateTransport',
  component: CreateTransportTemplate,
};

export default meta;
type Story = StoryObj<typeof CreateTransportTemplate>;

export const CreateTransportTemplatePrimmary: Story = {
  render: () => (
    <CreateTransportTemplateHelper
      onSubmitCreateTransport={() => console.log('Create Transport')}
    />
  ),
};
