import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { offerDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { OfferOverviewTemplate } from './OfferOverviewTemplate';

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();
const mockOnClickNavigateToCreatePage = vi.fn();

const MockNoDataOfferOverviewTemplate = () => (
  <StyledComponentsProvider>
    <OfferOverviewTemplate
      data={undefined}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

const MockWithDataOfferOverviewTemplate = () => (
  <StyledComponentsProvider>
    <OfferOverviewTemplate
      data={offerDataMock}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

describe('OfferOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockWithDataOfferOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label apear when there is no data', () => {
    render(<MockNoDataOfferOverviewTemplate />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure data apear when they are', () => {
    render(<MockWithDataOfferOverviewTemplate />);
    expect(
      screen.getByTestId('offer-overview-list-item-1')
    ).toBeInTheDocument();
  });
});
