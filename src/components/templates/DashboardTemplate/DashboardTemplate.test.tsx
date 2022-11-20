import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { DashboardTemplate } from './DashboardTemplate.component';

describe('DashboardTemplate', () => {
  test('component snapshot', () => {
    const version = '0.0.1';
    const view = render(
      <StyledComponentsProvider>
        <DashboardTemplate version={version} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure version renders correctly', () => {
    const version = '0.0.1';
    render(
      <StyledComponentsProvider>
        <DashboardTemplate version={version} />
      </StyledComponentsProvider>
    );
    const appVesionText = screen.getByTestId('app-version');
    expect(appVesionText).toHaveTextContent(`v${version}`);
  });
});
