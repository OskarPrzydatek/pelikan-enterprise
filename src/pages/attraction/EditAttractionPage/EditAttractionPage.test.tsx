import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { EditAttractionPage } from './EditAttractionPage';

const MockEditAttractionPage: React.FC = () => (
  <TestingPageProvider element={<EditAttractionPage />} />
);

describe('EditAttractionPage', () => {
  test('page snapshot', () => {
    const view = render(<MockEditAttractionPage />);
    expect(view).toMatchSnapshot();
  });
});
