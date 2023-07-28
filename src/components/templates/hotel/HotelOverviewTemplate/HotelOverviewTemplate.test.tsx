import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HotelOverviewTemplate } from './HotelOverviewTemplate';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

describe('HotelOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <HotelOverviewTemplate
          items={[
            { id: 1, name: 'hotel1' },
            { id: 2, name: 'hotel2' },
            { id: 3, name: 'hotel3' },
            { id: 4, name: 'hotel4' },
            { id: 5, name: 'hotel5' },
          ]}
          onClickItem={mockOnClickItem}
          onClickNavigate={mockOnClickNavigate}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
