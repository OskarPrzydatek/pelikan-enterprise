import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateOfferTemplateHelper } from './CreateOfferTemplateHelper';

const mockOnSubmitCreateOffer = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<object>('react-router-dom');

  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('CreateOfferTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateOfferTemplateHelper
        onSubmitCreateOffer={mockOnSubmitCreateOffer}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
