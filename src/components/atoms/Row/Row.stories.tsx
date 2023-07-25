import { Meta, StoryObj } from '@storybook/react';

import { TextFieldHelper } from '~/components/molecules/TextField/TextFieldHelper';
import { StyledComponentsProvider } from '~/providers';

import { Row } from './Row';

const meta: Meta<typeof Row> = {
  title: 'Atoms/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const RowStory: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Row>
        <TextFieldHelper />
        <TextFieldHelper />
      </Row>
    </StyledComponentsProvider>
  ),
};
