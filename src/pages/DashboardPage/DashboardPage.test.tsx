import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { DashboardPage } from './DashboardPage.component';

describe('DashboardPage', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <DashboardPage />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
