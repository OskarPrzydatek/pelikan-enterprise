import { Meta, StoryObj } from '@storybook/react';

import { StyledComponentsProvider } from '~/providers';

import { Row } from './Row.component';

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
        <input type="text" />
        <input type="text" />
      </Row>
    </StyledComponentsProvider>
  ),
};
