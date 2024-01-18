import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { CreateAttractionPage } from './CreateAttractionPage';

const MockCreateAttractionPage: React.FC = () => (
  <TestingPageProvider element={<CreateAttractionPage />} />
);

describe('CreateAttractionPage', () => {
  test('page snapshot', () => {
    const view = render(<MockCreateAttractionPage />);
    expect(view).toMatchSnapshot();
  });
});
