import { Meta, StoryObj } from '@storybook/react';

import { CreateHotelTemplate } from './CreateHotelTemplate';
import { CreateHotelTemplateHelper } from './CreateHotelTemplateHelper';

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
