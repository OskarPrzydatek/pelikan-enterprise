import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { TestingPageProvider } from '~/providers';

import { CreateHotelPage } from './CreateHotelPage';

const MockCreateHotelPage: React.FC = () => (
  <TestingPageProvider element={<CreateHotelPage />} />
);

describe('CreateHotelPage', () => {
  test('page snapshot', () => {
    const view = render(<MockCreateHotelPage />);
    expect(view).toMatchSnapshot();
  });
});
