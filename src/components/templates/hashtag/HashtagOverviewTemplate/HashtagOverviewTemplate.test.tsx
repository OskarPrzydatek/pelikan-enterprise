import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { HashtagOverviewTemplate } from './HashtagOverviewTemplate';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

const MockHashtagOverviewTemplate = () => (
  <StyledComponentsProvider>
    <HashtagOverviewTemplate
      items={[
        { id: 1, name: 'hashtag1' },
        { id: 2, name: 'hashtag2' },
        { id: 3, name: 'hashtag3' },
        { id: 4, name: 'hashtag4' },
        { id: 5, name: 'hashtag5' },
      ]}
      onClickItem={mockOnClickItem}
      onClickNavigate={mockOnClickNavigate}
    />
  </StyledComponentsProvider>
);

describe('HashtagOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockHashtagOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });
});
