import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { AttractionOverviewTemplate } from './AttractionOverviewTemplate';

const mockOnClickNavigate = vi.fn();

describe('AttractionOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <AttractionOverviewTemplate onClickNavigate={mockOnClickNavigate} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
