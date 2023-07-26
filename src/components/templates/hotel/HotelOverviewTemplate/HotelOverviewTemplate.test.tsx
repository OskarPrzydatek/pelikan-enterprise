import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HotelOverviewTemplate } from './HotelOverviewTemplate';

const mockOnClickNavigate = vi.fn();

describe('HotelOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <HotelOverviewTemplate onClickNavigate={mockOnClickNavigate} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
