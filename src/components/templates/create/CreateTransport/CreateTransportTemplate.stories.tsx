import { Meta, StoryObj } from '@storybook/react';

import { CreateTransportTemplateHelper } from '~/helpers';

import { CreateTransportTemplate } from './CreateTransportTemplate';

const meta: Meta<typeof CreateTransportTemplate> = {
  title: 'Templates/CreateTransportTemplate',
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
