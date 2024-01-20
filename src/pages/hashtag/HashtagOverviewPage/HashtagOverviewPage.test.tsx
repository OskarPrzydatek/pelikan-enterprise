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

const mockNavigate = vi.fn();

vi.mock('swr', async () => {
  const actual = await vi.importActual<object>('swr');

  return {
    ...actual,
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('HashtagOverviewPage', () => {
  test('page snapshot', () => {
    const view = render(<MockHashtagOverviewPage />);
    expect(view).toMatchSnapshot();
  });
});
