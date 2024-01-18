import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { EditHotelPage } from './EditHotelPage';

const MockEditHotelPage: React.FC = () => (
  <TestingPageProvider element={<EditHotelPage />} />
);

describe('EditHotelPage', () => {
  test('page snapshot', () => {
    const view = render(<MockEditHotelPage />);
    expect(view).toMatchSnapshot();
  });
});
