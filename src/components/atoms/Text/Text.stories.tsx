import { StyledComponentsProvider } from '~/providers';

import { Text } from './Text';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextWithStringChildStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Text>String Text</Text>
    </StyledComponentsProvider>
  ),
};
