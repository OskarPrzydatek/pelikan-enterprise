import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { EditTransportPage } from './EditTransportPage';

const MockEditTransportPage: React.FC = () => (
  <TestingPageProvider element={<EditTransportPage />} />
);

describe('EditTransportPage', () => {
  test('page snapshot', () => {
    const view = render(<MockEditTransportPage />);
    expect(view).toMatchSnapshot();
  });
});
