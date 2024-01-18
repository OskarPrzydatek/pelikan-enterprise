import { fireEvent, render, screen } from '@testing-library/react';
import useSWR from 'swr';
import { Mock, describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { offerDataMock } from '~/mocks';
import { TestingPageProvider } from '~/providers';

import { OfferOverviewPage } from './OfferOverviewPage';

const MockOfferOverviewPage: React.FC = () => (
  <TestingPageProvider element={<OfferOverviewPage />} />
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

describe('OfferOverviewPage', () => {
  beforeEach(() => {
    mockUseSWR.mockReturnValue({
      data: offerDataMock,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('page snapshot', () => {
    const view = render(<MockOfferOverviewPage />);
    expect(view).toMatchSnapshot();
  });

  test('ensure create Offer works correctly', () => {
    render(<MockOfferOverviewPage />);
    fireEvent.click(
      screen.getByTestId('overview-list-navigate-to-create-page')
    );
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.CREATE_OFFER}`);
  });

  test('ensure edit Offer works correctly', () => {
    render(<MockOfferOverviewPage />);
    fireEvent.click(screen.getByTestId('offer-overview-edit-1'));
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.EDIT_OFFER}/1`);
  });
});
