import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Background } from './Background.component';

const meta: Meta<typeof Background> = {
  title: 'Atoms/Background',
  component: Background,
};

export default meta;
type Story = StoryObj<typeof Background>;

export const BackgroundWithLeftSideChildren: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Background>
        <div
          id="exaple-side-menu"
          style={{
            width: '30%',
            height: '100%',
            background: '#FFF',
          }}
        >
          <p>Example Text</p>
        </div>
      </Background>
    </StyledComponentsProvider>
  ),
};
