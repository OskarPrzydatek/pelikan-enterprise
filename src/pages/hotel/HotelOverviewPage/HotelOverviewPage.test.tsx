import { fireEvent, render, screen } from '@testing-library/react';
import useSWR from 'swr';
import { Mock, describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { hotelDataMock } from '~/mocks';
import { TestingPageProvider } from '~/providers';

import { HotelOverviewPage } from './HotelOverviewPage';

const MockHotelOverviewPage: React.FC = () => (
  <TestingPageProvider element={<HotelOverviewPage />} />
);

const mockUseSWR = useSWR as Mock;
vi.mock('swr', () => ({
  default: vi.fn(),
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('HotelOverviewPage', () => {
  beforeEach(() => {
    mockUseSWR.mockReturnValue({
      data: hotelDataMock,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('page snapshot', () => {
    const view = render(<MockHotelOverviewPage />);
    expect(view).toMatchSnapshot();
  });

  test('ensure create Hotel works correctly', () => {
    render(<MockHotelOverviewPage />);
    fireEvent.click(
      screen.getByTestId('overview-list-navigate-to-create-page')
    );
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.CREATE_HOTEL}`);
  });

  test('ensure edit Hotel works correctly', () => {
    render(<MockHotelOverviewPage />);
    fireEvent.click(screen.getByTestId('hotel-overview-edit-1'));
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.EDIT_HOTEL}/1`);
  });
});
