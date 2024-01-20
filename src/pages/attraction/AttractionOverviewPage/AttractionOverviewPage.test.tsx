import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { AttractionOverviewPage } from './AttractionOverviewPage';

const MockAttractionOverviewPage: React.FC = () => (
  <TestingPageProvider element={<AttractionOverviewPage />} />
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

describe('AttractionOverviewPage', () => {
  test('page snapshot', () => {
    const view = render(<MockAttractionOverviewPage />);
    expect(view).toMatchSnapshot();
  });
});
