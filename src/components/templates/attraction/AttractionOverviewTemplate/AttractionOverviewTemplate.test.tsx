import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { AttractionOverviewTemplate } from './AttractionOverviewTemplate';

const mockOnClickItem = vi.fn();
const mockOnClickNavigate = vi.fn();

const MockAttractionOverviewTemplate = () => (
  <StyledComponentsProvider>
    <AttractionOverviewTemplate
      items={[
        { id: 1, name: 'attraction1' },
        { id: 2, name: 'attraction2' },
        { id: 3, name: 'attraction3' },
        { id: 4, name: 'attraction4' },
        { id: 5, name: 'attraction5' },
      ]}
      onClickItem={mockOnClickItem}
      onClickNavigate={mockOnClickNavigate}
    />
  </StyledComponentsProvider>
);

describe('AttractionOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockAttractionOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });
});
