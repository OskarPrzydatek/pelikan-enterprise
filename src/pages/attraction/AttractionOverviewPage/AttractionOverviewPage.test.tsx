import { fireEvent, render, screen } from '@testing-library/react';
import useSWR from 'swr';
import { Mock, describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { attractionDataMock } from '~/mocks';
import { TestingPageProvider } from '~/providers';

import { AttractionOverviewPage } from './AttractionOverviewPage';

const MockAttractionOverviewPage: React.FC = () => (
  <TestingPageProvider element={<AttractionOverviewPage />} />
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

describe('AttractionOverviewPage', () => {
  beforeEach(() => {
    mockUseSWR.mockReturnValue({
      data: attractionDataMock,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('page snapshot', () => {
    const view = render(<MockAttractionOverviewPage />);
    expect(view).toMatchSnapshot();
  });

  test('ensure create attraction works correctly', () => {
    render(<MockAttractionOverviewPage />);
    fireEvent.click(
      screen.getByTestId('overview-list-navigate-to-create-page')
    );
    expect(mockNavigate).toHaveBeenLastCalledWith(
      `/${Slugs.CREATE_ATTRACTION}`
    );
  });

  test('ensure edit attraction works correctly', () => {
    render(<MockAttractionOverviewPage />);
    fireEvent.click(screen.getByTestId('attraction-overview-edit-1'));
    expect(mockNavigate).toHaveBeenLastCalledWith(
      `/${Slugs.EDIT_ATTRACTION}/1`
    );
  });
});
