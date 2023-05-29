import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateOfferTemplateHelper } from '~/helpers';

const mockOnSubmitCreateOffer = vi.fn();

describe('CreateOffer Template', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateOfferTemplateHelper
        onSubmitCreateOffer={mockOnSubmitCreateOffer}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
