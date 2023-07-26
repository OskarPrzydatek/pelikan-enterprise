import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { OfferOverviewTemplate } from './OfferOverviewTemplate';

const mockOnClickNavigate = vi.fn();

describe('OfferOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <OfferOverviewTemplate onClickNavigate={mockOnClickNavigate} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
