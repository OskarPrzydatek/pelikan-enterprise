import { Meta, StoryObj } from '@storybook/react';

import { Icons } from '~/constants';
import { StyledComponentsProvider } from '~/styles';

import { Icon } from './Icon.component';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const ChevronIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={Icons.CHEVRON} />
    </StyledComponentsProvider>
  ),
};

export const CloseIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={Icons.CLOSE} />
    </StyledComponentsProvider>
  ),
};

export const HamburgerIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={Icons.HAMBURGER} />
    </StyledComponentsProvider>
  ),
};
