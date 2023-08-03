import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { EditHashtagPage } from './EditHashtagPage';

const MockEditHashtagPage: React.FC = () => (
  <TestingPageProvider element={<EditHashtagPage />} />
);

describe('EditHashtagPage', () => {
  test('page snapshot', () => {
    const view = render(<MockEditHashtagPage />);
    expect(view).toMatchSnapshot();
  });
});
