import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/styles';

import { ProfilePicture } from './ProfilePicture.component';

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
