import { fireEvent, render, screen } from '@testing-library/react';
import useSWR from 'swr';
import { Mock, describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { hashtagDataMock } from '~/mocks';
import { TestingPageProvider } from '~/providers';

import { HashtagOverviewPage } from './HashtagOverviewPage';

const MockHashtagOverviewPage: React.FC = () => (
  <TestingPageProvider element={<HashtagOverviewPage />} />
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

describe('HashtagOverviewPage', () => {
  beforeEach(() => {
    mockUseSWR.mockReturnValue({
      data: hashtagDataMock,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('page snapshot', () => {
    const view = render(<MockHashtagOverviewPage />);
    expect(view).toMatchSnapshot();
  });

  test('ensure create Hashtag works correctly', () => {
    render(<MockHashtagOverviewPage />);
    fireEvent.click(
      screen.getByTestId('overview-list-navigate-to-create-page')
    );
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.CREATE_HASHTAG}`);
  });

  test('ensure edit Hashtag works correctly', () => {
    render(<MockHashtagOverviewPage />);
    fireEvent.click(screen.getByTestId('hashtag-overview-edit-1'));
    expect(mockNavigate).toHaveBeenLastCalledWith(`/${Slugs.EDIT_HASHTAG}/1`);
  });
});
