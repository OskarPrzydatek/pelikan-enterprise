import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { OfferOverviewPage } from './OfferOverviewPage';

const MockOfferOverviewPage: React.FC = () => (
  <TestingPageProvider element={<OfferOverviewPage />} />
);

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('OfferOverviewPage', () => {
  test('page snapshot', () => {
    const view = render(<MockOfferOverviewPage />);
    expect(view).toMatchSnapshot();
  });
});
