import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Form } from './Form.component';

const mockOnSubmit = vi.fn();

describe('Form', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Form
          methods={undefined}
          submitLabel="Submit label"
          title="Form title"
          onSubmit={mockOnSubmit}
        >
          <input />
        </Form>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
