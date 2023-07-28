import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Form } from './Form';

const mockOnSubmit = vi.fn();

const MockForm = () => (
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

describe('Form', () => {
  test('component snapshot', () => {
    const view = render(<MockForm />);
    expect(view).toMatchSnapshot();
  });
});
