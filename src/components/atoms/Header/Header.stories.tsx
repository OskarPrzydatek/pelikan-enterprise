import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Header>String Header</Header>
    </StyledComponentsProvider>
  ),
};
