import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HashtagOverviewTemplate } from './HashtagOverviewTemplate';

const mockOnClickNavigate = vi.fn();

describe('HashtagOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <HashtagOverviewTemplate onClickNavigate={mockOnClickNavigate} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
