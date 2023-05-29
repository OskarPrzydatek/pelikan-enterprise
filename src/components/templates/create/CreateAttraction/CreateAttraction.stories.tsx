import { Meta, StoryObj } from '@storybook/react';

import { CreateAttractionTemplateHelper } from '~/helpers';

import { CreateAttractionTemplate } from './CreateAttraction.template';

const meta: Meta<typeof CreateAttractionTemplate> = {
  title: 'Templates/CreateAttraction',
  component: CreateAttractionTemplate,
};

export default meta;
type Story = StoryObj<typeof CreateAttractionTemplate>;

export const CreateAttractionTemplatePrimmary: Story = {
  render: () => (
    <CreateAttractionTemplateHelper
      onSubmitCreateAttraction={() => console.log('Create Attraction')}
    />
  ),
};
