import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { ProfilePicture } from './ProfilePicture';

const meta: Meta<typeof ProfilePicture> = {
  title: 'Molecules/ProfilePicture',
  component: ProfilePicture,
};

export default meta;
type Story = StoryObj<typeof ProfilePicture>;

export const ProfilePictureStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <ProfilePicture label="Witaj User" />
    </StyledComponentsProvider>
  ),
};
