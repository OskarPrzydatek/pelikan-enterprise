import { Meta, StoryObj } from '@storybook/react';

import { CreateHashtagTemplate } from './CreateHashtagTemplate';
import { CreateHashtagTemplateHelper } from './CreateHashtagTemplateHelper';

const meta: Meta<typeof CreateHashtagTemplate> = {
  title: 'Templates/CreateHashtagTemplate',
  component: CreateHashtagTemplate,
};

export default meta;
type Story = StoryObj<typeof CreateHashtagTemplate>;

export const CreateHashtagTemplatePrimmary: Story = {
  render: () => (
    <CreateHashtagTemplateHelper
      onSubmitCreateHashtag={() => console.log('Create Hashtag')}
    />
  ),
};
