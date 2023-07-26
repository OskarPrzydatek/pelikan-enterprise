import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { TransportOverviewTemplate } from './TransportOverviewTemplate';

const mockOnClickNavigate = vi.fn();

describe('TransportOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <TransportOverviewTemplate onClickNavigate={mockOnClickNavigate} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
