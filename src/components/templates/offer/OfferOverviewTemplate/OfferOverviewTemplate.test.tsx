import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { OfferOverviewTemplate } from './OfferOverviewTemplate';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

const MockfferOverviewTemplate = () => (
  <StyledComponentsProvider>
    <OfferOverviewTemplate
      items={[
        { id: 1, name: 'offer1' },
        { id: 2, name: 'offer2' },
        { id: 3, name: 'offer3' },
        { id: 4, name: 'offer4' },
        { id: 5, name: 'offer5' },
      ]}
      onClickItem={mockOnClickItem}
      onClickNavigate={mockOnClickNavigate}
    />
  </StyledComponentsProvider>
);

describe('OfferOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockfferOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });
});
