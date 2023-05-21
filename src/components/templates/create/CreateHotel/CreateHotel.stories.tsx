import { Meta, StoryObj } from '@storybook/react';

import { CreateHotelTemplateHelper } from '~/helpers';

import { CreateHotelTemplate } from './CreateHotel.template';

const meta: Meta<typeof CreateHotelTemplate> = {
  title: 'Templates/CreateHotel',
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
