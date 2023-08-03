import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { hotelDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { HotelOverviewTemplate } from './HotelOverviewTemplate';

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();
const mockOnClickNavigateToCreatePage = vi.fn();

const MockNoDataHotelOverviewTemplate = () => (
  <StyledComponentsProvider>
    <HotelOverviewTemplate
      data={undefined}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

const MockWithDataHotelOverviewTemplate = () => (
  <StyledComponentsProvider>
    <HotelOverviewTemplate
      data={hotelDataMock}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

describe('HotelOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockWithDataHotelOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label apear when there is no data', () => {
    render(<MockNoDataHotelOverviewTemplate />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure data apear when they are', () => {
    render(<MockWithDataHotelOverviewTemplate />);
    expect(
      screen.getByTestId('hotel-overview-list-item-1')
    ).toBeInTheDocument();
  });
});
