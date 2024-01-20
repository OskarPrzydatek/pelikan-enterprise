import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { Slugs } from '~/constants';
import { TestingPageProvider } from '~/providers';

import { TransportOverviewPage } from './TransportOverviewPage';

const MockTransportOverviewPage: React.FC = () => (
  <TestingPageProvider element={<TransportOverviewPage />} />
);

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<{}>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('TransportOverviewPage', () => {
  test('page snapshot', () => {
    const view = render(<MockTransportOverviewPage />);
    expect(view).toMatchSnapshot();
  });
});
