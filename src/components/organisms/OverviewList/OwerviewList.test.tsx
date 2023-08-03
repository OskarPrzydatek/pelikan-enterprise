import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { OverviewListItem } from '~/components/molecules';
import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const dataStub = [
  { id: 1, name: 'attraction1' },
  { id: 2, name: 'attraction2' },
  { id: 3, name: 'attraction3' },
  { id: 4, name: 'attraction4' },
  { id: 5, name: 'attraction5' },
];

const mockOnClickNavigateToCreatePage = vi.fn();

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();

const MockOverviewListEmpty = () => (
  <StyledComponentsProvider>
    <OverviewList
      navigateLabel="Dodaj atrakcję"
      noItemsLabel="Brak atrakcji w systemie"
      page="1"
      title="Atrakcje"
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    >
      {null}
    </OverviewList>
  </StyledComponentsProvider>
);

const MockOverviewListWithData = ({ page }: { page?: string | undefined }) => (
  <StyledComponentsProvider>
    <OverviewList
      navigateLabel="Dodaj atrakcję"
      noItemsLabel="Brak atrakcji w systemie"
      page={page}
      title="Atrakcje"
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    >
      {dataStub.map(({ id, name }) => (
        <OverviewListItem
          key={`${id}-${name}`}
          id={1}
          name={name}
          onClickDelete={mockOnClickDelete}
          onClickEdit={mockOnClickEdit}
        />
      ))}
    </OverviewList>
  </StyledComponentsProvider>
);

describe('OverviewList', () => {
  test('component snapshot', () => {
    const view = render(<MockOverviewListWithData />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label renders when there is no items', () => {
    render(<MockOverviewListEmpty />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure current page is one when is undefined', () => {
    const { rerender } = render(<MockOverviewListWithData page={undefined} />);
    const paginationCounter = screen.getByTestId('pagination-counter');
    expect(paginationCounter).toHaveTextContent('1 / X');
    rerender(<MockOverviewListWithData page="2" />);
    expect(paginationCounter).toHaveTextContent('2 / X');
  });
});
