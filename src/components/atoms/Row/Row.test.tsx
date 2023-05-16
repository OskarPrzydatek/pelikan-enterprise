import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Row } from './Row.component';

describe('Row', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Row>
          <input type="text" />
          <input type="text" />
        </Row>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
