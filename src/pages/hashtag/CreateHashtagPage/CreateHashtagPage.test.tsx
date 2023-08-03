import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { CreateHashtagPage } from './CreateHashtagPage';

const MockCreateHashtagPage: React.FC = () => (
  <TestingPageProvider element={<CreateHashtagPage />} />
);

describe('CreateHashtagPage', () => {
  test('page snapshot', () => {
    const view = render(<MockCreateHashtagPage />);
    expect(view).toMatchSnapshot();
  });
});
