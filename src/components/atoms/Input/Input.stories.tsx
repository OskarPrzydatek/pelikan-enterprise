import { StyledComponentsProvider } from '~/styles';

import { Input } from './Input.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Input
        id="text-input"
        placeholder="Text Input"
        onBlur={() => console.log('onBlur')}
        onFocus={() => console.log('onFocus')}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.value)
        }
      />
    </StyledComponentsProvider>
  ),
};
