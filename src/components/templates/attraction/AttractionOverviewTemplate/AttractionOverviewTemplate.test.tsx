import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { attractionDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { AttractionOverviewTemplate } from './AttractionOverviewTemplate';

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();
const mockOnClickNavigateToCreatePage = vi.fn();

const MockNoDataAttractionOverviewTemplate = () => {
  return (
    <StyledComponentsProvider>
      <AttractionOverviewTemplate
        data={undefined}
        error={undefined}
        isLoading={false}
        onClickDelete={mockOnClickDelete}
        onClickEdit={mockOnClickEdit}
        onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
      />
    </StyledComponentsProvider>
  );
};

const MockWithDataAttractionOverviewTemplate = () => {
  return (
    <StyledComponentsProvider>
      <AttractionOverviewTemplate
        data={attractionDataMock}
        error={undefined}
        isLoading={false}
        onClickDelete={mockOnClickDelete}
        onClickEdit={mockOnClickEdit}
        onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
      />
    </StyledComponentsProvider>
  );
};

describe('AttractionOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockWithDataAttractionOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label apear when there is no data', () => {
    render(<MockNoDataAttractionOverviewTemplate />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure data apear when they are', () => {
    render(<MockWithDataAttractionOverviewTemplate />);
    expect(
      screen.getByTestId('attraction-overview-list-item-1')
    ).toBeInTheDocument();
  });
});
