import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/styles';

import { Header } from './Header.component';

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
