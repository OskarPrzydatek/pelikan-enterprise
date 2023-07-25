import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateHotelTemplateHelper } from './CreateHotelTemplateHelper';

const mockOnSubmitCreateHotel = vi.fn();

describe('CreateHotelTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateHotelTemplateHelper
        onSubmitCreateHotel={mockOnSubmitCreateHotel}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
