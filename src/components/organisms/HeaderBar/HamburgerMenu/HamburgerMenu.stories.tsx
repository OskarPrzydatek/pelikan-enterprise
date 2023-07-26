import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { StyledComponentsProvider } from '~/providers';

import { HamburgerMenu } from './HamburgerMenu';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'Organisms/HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenu>;

export const HamburgerMenuStory: Story = {
  render: () => (
    <BrowserRouter>
      <StyledComponentsProvider>
        <HamburgerMenu />
      </StyledComponentsProvider>
    </BrowserRouter>
  ),
};