import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimmary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Button onClick={() => console.log('clicked')}>Primary</Button>
    </StyledComponentsProvider>
  ),
};

export const ButtonSecondary: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Button variant="secondary" onClick={() => console.log('clicked')}>
        Secondary
      </Button>
    </StyledComponentsProvider>
  ),
};

export const ButtonGhost: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Button variant="ghost" onClick={() => console.log('clicked')}>
        Primary
      </Button>
    </StyledComponentsProvider>
  ),
};
