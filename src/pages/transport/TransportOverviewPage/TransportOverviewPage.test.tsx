import { fireEvent, render, screen } from '@testing-library/react';
import useSWR from 'swr';
import { Mock, describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { transportDataMock } from '~/mocks';
import { TestingPageProvider } from '~/providers';

import { TransportOverviewPage } from './TransportOverviewPage';

const MockTransportOverviewPage: React.FC = () => (
  <TestingPageProvider element={<TransportOverviewPage />} />
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

describe('TransportOverviewPage', () => {
  beforeEach(() => {
    mockUseSWR.mockReturnValue({
      data: transportDataMock,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('page snapshot', () => {
    const view = render(<MockTransportOverviewPage />);
    expect(view).toMatchSnapshot();
  });

  test('ensure create Transport works correctly', () => {
    render(<MockTransportOverviewPage />);
    fireEvent.click(
      screen.getByTestId('overview-list-navigate-to-create-page')
    );
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.CREATE_TRANSPORT}`);
  });

  test('ensure edit Transport works correctly', () => {
    render(<MockTransportOverviewPage />);
    fireEvent.click(screen.getByTestId('transport-overview-edit-1'));
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.EDIT_TRANSPORT}/1`);
  });
});
