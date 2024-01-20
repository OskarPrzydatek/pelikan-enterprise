import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { HotelOverviewPage } from './HotelOverviewPage';

const MockHotelOverviewPage: React.FC = () => (
  <TestingPageProvider element={<HotelOverviewPage />} />
);

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('HotelOverviewPage', () => {
  test('page snapshot', () => {
    const view = render(<MockHotelOverviewPage />);
    expect(view).toMatchSnapshot();
  });
});
