import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { EditOfferPage } from './EditOfferPage';

const MockEditOfferPage: React.FC = () => (
  <TestingPageProvider element={<EditOfferPage />} />
);

describe('EditOfferPage', () => {
  test('page snapshot', () => {
    const view = render(<MockEditOfferPage />);
    expect(view).toMatchSnapshot();
  });
});
