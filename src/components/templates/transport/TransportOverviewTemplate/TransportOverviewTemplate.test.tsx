import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { TransportOverviewTemplate } from './TransportOverviewTemplate';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

describe('TransportOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <TransportOverviewTemplate
          items={[
            { id: 1, name: 'transport1' },
            { id: 2, name: 'transport2' },
            { id: 3, name: 'transport3' },
            { id: 4, name: 'transport4' },
            { id: 5, name: 'transport5' },
          ]}
          onClickItem={mockOnClickItem}
          onClickNavigate={mockOnClickNavigate}
        />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
