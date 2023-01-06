import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/styles';

import { Footer } from './Footer.component';

const meta: Meta<typeof Footer> = {
  title: 'Organismis/Footer',
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
