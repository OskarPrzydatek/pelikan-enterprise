import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateHotelTemplateHelper } from '~/helpers';

const mockOnSubmitCreateHotel = vi.fn();

describe('CreateHotel Template', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateHotelTemplateHelper
        onSubmitCreateHotel={mockOnSubmitCreateHotel}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
