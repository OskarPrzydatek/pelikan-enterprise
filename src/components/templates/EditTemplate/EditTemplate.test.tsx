import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { EditTemplate } from './EditTemplate.component';

describe('EditTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <EditTemplate id="10" title="Edytuj Ofertę" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
