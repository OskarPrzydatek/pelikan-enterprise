import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { CreateTransportPage } from './CreateTransportPage';

const MockCreateTransportPage: React.FC = () => (
  <TestingPageProvider element={<CreateTransportPage />} />
);

describe('CreateTransportPage', () => {
  test('page snapshot', () => {
    const view = render(<MockCreateTransportPage />);
    expect(view).toMatchSnapshot();
  });
});
