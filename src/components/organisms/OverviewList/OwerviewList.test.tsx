import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { OverviewList } from './OverviewList';

const mockOnClickNavigate = vi.fn();

describe('OverviewList', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <OverviewList
          navigateLabel="Dodaj atrakcję"
          noItemsLabel="Brak atrakcji w systemie"
          page="1"
          title="Atrakcje"
          onClickNavigate={mockOnClickNavigate}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure current page is one when is undefined', () => {
    const { rerender } = render(
      <StyledComponentsProvider>
        <OverviewList
          navigateLabel="Dodaj atrakcję"
          noItemsLabel="Brak atrakcji w systemie"
          page={undefined}
          title="Atrakcje"
          onClickNavigate={mockOnClickNavigate}
        />
      </StyledComponentsProvider>
    );
    const paginationCounter = screen.getByTestId('pagination-counter');
    expect(paginationCounter).toHaveTextContent('1 / X');
    rerender(
      <StyledComponentsProvider>
        <OverviewList
          navigateLabel="Dodaj atrakcję"
          noItemsLabel="Brak atrakcji w systemie"
          page="2"
          title="Atrakcje"
          onClickNavigate={mockOnClickNavigate}
        />
      </StyledComponentsProvider>
    );
    expect(paginationCounter).toHaveTextContent('2 / X');
  });
});
