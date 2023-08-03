import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { CreateOfferPage } from './CreateOfferPage';

const MockCreateOfferPage: React.FC = () => (
  <TestingPageProvider element={<CreateOfferPage />} />
);

describe('CreateOfferPage', () => {
  test('page snapshot', () => {
    const view = render(<MockCreateOfferPage />);
    expect(view).toMatchSnapshot();
  });
});
