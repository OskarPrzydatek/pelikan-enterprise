import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { StyledComponentsProvider } from '~/styles';

import { HeaderBar } from './HeaderBar.component';

const meta: Meta<typeof HeaderBar> = {
  title: 'Organisms/HeaderBar',
  component: HeaderBar,
};

export default meta;
type Story = StoryObj<typeof HeaderBar>;

export const HeaderBarStory: Story = {
  render: () => (
    <BrowserRouter>
      <StyledComponentsProvider>
        <HeaderBar />
      </StyledComponentsProvider>
    </BrowserRouter>
  ),
};