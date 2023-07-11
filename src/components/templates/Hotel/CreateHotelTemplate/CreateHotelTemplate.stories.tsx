import { Meta, StoryObj } from '@storybook/react';

import { CreateHotelTemplateHelper } from '~/helpers';

import { CreateHotelTemplate } from './CreateHotelTemplate';

const meta: Meta<typeof CreateHotelTemplate> = {
  title: 'Templates/CreateHotelTemplate',
  component: CreateHotelTemplate,
};

export default meta;
type Story = StoryObj<typeof CreateHotelTemplate>;

export const CreateHotelTemplatePrimmary: Story = {
  render: () => (
    <CreateHotelTemplateHelper
      onSubmitCreateHotel={() => console.log('Create Hotel')}
    />
  ),
};
