import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateTransportTemplateHelper } from './CreateTransportTemplateHelper';

const mockOnSubmitCreateTransport = vi.fn();

describe('CreateTransport Template', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateTransportTemplateHelper
        onSubmitCreateTransport={mockOnSubmitCreateTransport}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
