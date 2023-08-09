import { fireEvent, render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Modal } from './Modal';

const mockOnClickAccept = vi.fn();
const mockOnClickClose = vi.fn();

const MockModal = () => (
  <StyledComponentsProvider>
    <Modal
      acceptButtonTestID="molecule-modal-accept"
      acceptLabel="Akceptuj"
      closeIconTestID="molecule-modal-close"
      dataTestID="molecule-modal"
      onClickAccept={mockOnClickAccept}
      onClickBackground={mockOnClickClose}
      onClickClose={mockOnClickClose}
    >
      <p data-testid="modal-content">Example Text</p>
    </Modal>
  </StyledComponentsProvider>
);

describe('Modal', () => {
  test('component snapshot', () => {
    const view = render(<MockModal />);
    expect(view).toMatchSnapshot();
  });

  test('ensure modal is closing correctly', () => {
    render(<MockModal />);
    fireEvent.click(screen.getByTestId('molecule-modal-close'));
    expect(mockOnClickClose).toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('molecule-modal-background'));
    expect(mockOnClickClose).toHaveBeenCalled();
  });

  test('ensure modal accept works correctly', () => {
    render(<MockModal />);
    fireEvent.click(screen.getByTestId('molecule-modal-accept'));
    expect(mockOnClickAccept).toHaveBeenCalled();
  });
});
