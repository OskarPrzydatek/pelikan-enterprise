import { Meta, StoryObj } from '@storybook/react';

import { CreateHashtagTemplateHelper } from '~/helpers';

import { CreateHashtagTemplate } from './CreateHashtag.template';

const meta: Meta<typeof CreateHashtagTemplate> = {
  title: 'Templates/CreateHashtag',
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
