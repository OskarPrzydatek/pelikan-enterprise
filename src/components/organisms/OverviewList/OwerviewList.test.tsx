import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

const EmptyOverviewList = () => (
  <StyledComponentsProvider>
    <OverviewList
      items={[]}
      navigateLabel="Dodaj atrakcję"
      noItemsLabel="Brak atrakcji w systemie"
      page="1"
      title="Atrakcje"
      onClickItem={mockOnClickItem}
      onClickNavigate={mockOnClickNavigate}
    />
  </StyledComponentsProvider>
);

const AttractionOverviewList = ({ page }: { page?: string | undefined }) => (
  <StyledComponentsProvider>
    <OverviewList
      navigateLabel="Dodaj atrakcję"
      noItemsLabel="Brak atrakcji w systemie"
      page={page}
      title="Atrakcje"
      items={[
        { id: 1, name: 'attraction1' },
        { id: 2, name: 'attraction2' },
        { id: 3, name: 'attraction3' },
        { id: 4, name: 'attraction4' },
        { id: 5, name: 'attraction5' },
      ]}
      onClickItem={mockOnClickItem}
      onClickNavigate={mockOnClickNavigate}
    />
  </StyledComponentsProvider>
);

describe('OverviewList', () => {
  test('component snapshot', () => {
    const view = render(<AttractionOverviewList />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label renders when there is no items', () => {
    render(<EmptyOverviewList />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure overview list item after click triggers onClickItem function', () => {
    render(<AttractionOverviewList />);
    fireEvent.click(screen.getByTestId('overview-list-item-1'));
    expect(mockOnClickItem).toHaveBeenCalledWith(1);
  });

  test('ensure current page is one when is undefined', () => {
    const { rerender } = render(<AttractionOverviewList page={undefined} />);
    const paginationCounter = screen.getByTestId('pagination-counter');
    expect(paginationCounter).toHaveTextContent('1 / X');
    rerender(<AttractionOverviewList page="2" />);
    expect(paginationCounter).toHaveTextContent('2 / X');
  });
});
