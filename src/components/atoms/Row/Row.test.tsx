import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Row } from './Row';

const MockRow = () => (
  <StyledComponentsProvider>
    <Row>
      <input type="text" />
      <input type="text" />
    </Row>
  </StyledComponentsProvider>
);

describe('Row', () => {
  test('component snapshot', () => {
    const view = render(<MockRow />);
    expect(view).toMatchSnapshot();
  });
});
