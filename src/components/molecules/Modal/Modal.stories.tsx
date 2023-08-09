import { Meta, StoryObj } from '@storybook/react';

import { Text } from '~/components/atoms';
import { StyledComponentsProvider } from '~/providers';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalWithLeftSideChildren: Story = {
  render: () => (
    <StyledComponentsProvider>
      <Modal
        acceptLabel="Akceptuj"
        onClickAccept={() => console.log('onClickAccept!')}
        onClickBackground={() => console.log('onClickBackground!')}
        onClickClose={() => console.log('onClickClose!')}
      >
        <Text>Example Text</Text>
      </Modal>
    </StyledComponentsProvider>
  ),
};
