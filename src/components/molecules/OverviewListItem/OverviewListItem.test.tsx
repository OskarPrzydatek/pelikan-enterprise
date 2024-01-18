import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { OverviewListItem } from './OverviewListItem';

const mockOnClickEdit = vi.fn();
const mockOnClickDelete = vi.fn();

const MockOverviewListItem = () => (
  <StyledComponentsProvider>
    <OverviewListItem
      deleteIconTestID="overview-list-item-delete-icon"
      editIconTestID="overview-list-item-edit-icon"
      id={1}
      name="Item"
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
    />
  </StyledComponentsProvider>
);

describe('OverviewListItem', () => {
  test('component snapshot', () => {
    const view = render(<MockOverviewListItem />);
    expect(view).toMatchSnapshot();
  });

  test('ensure functional icons works correctly', () => {
    render(<MockOverviewListItem />);
    fireEvent.click(screen.getByTestId('overview-list-item-edit-icon'));
    expect(mockOnClickEdit).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByTestId('overview-list-item-delete-icon'));
    expect(mockOnClickDelete).toHaveBeenCalled();
  });
});
