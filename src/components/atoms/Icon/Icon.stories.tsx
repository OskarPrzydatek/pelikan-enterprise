import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/styles';

import { Icon } from './Icon.component';
import { IconEnum } from './Icon.enum';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const ChevronIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={IconEnum.CHEVRON} />
    </StyledComponentsProvider>
  ),
};

export const CloseIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={IconEnum.CLOSE} />
    </StyledComponentsProvider>
  ),
};

export const HamburgerIcon: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Icon icon={IconEnum.HAMBURGER} />
    </StyledComponentsProvider>
  ),
};
