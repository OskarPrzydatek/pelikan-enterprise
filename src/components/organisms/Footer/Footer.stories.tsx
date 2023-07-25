import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Footer version="0.0.1" />
    </StyledComponentsProvider>
  ),
};
