import { Meta, StoryObj } from '@storybook/react';

import { CreateTransportTemplate } from './CreateTransportTemplate';
import { CreateTransportTemplateHelper } from './CreateTransportTemplateHelper';

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
