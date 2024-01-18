import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { ActivitiIndicator } from './ActivitiIndicator';

const MockActivitiIndicator = () => (
  <StyledComponentsProvider>
    <ActivitiIndicator label="Ładuję" />
  </StyledComponentsProvider>
);

describe('ActivitiIndicator', () => {
  test('component snapshot', () => {
    const view = render(<MockActivitiIndicator />);
    expect(view).toMatchSnapshot();
  });
});
