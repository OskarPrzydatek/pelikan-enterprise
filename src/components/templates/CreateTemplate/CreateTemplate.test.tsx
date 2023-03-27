import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { CreateTemplate } from './CreateTemplate.component';

describe('CreateTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <CreateTemplate title="Dodaj Ofertę" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
