import { StyledComponentsProvider } from '~/styles';

import { Field } from './Field.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Field> = {
  title: 'Atoms/Field',
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const FieldStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Field
        id="field-input"
        placeholder="Example Text Field"
        onBlur={() => console.log('onBlur')}
        onFocus={() => console.log('onFocus')}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.value)
        }
      />
    </StyledComponentsProvider>
  ),
};