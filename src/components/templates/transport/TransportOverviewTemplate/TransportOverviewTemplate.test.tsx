import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { transportDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { TransportOverviewTemplate } from './TransportOverviewTemplate';

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();
const mockOnClickNavigateToCreatePage = vi.fn();

const MockNoDataTransportOverviewTemplate = () => (
  <StyledComponentsProvider>
    <TransportOverviewTemplate
      data={undefined}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

const MockWithDataTransportOverviewTemplate = () => (
  <StyledComponentsProvider>
    <TransportOverviewTemplate
      data={transportDataMock}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

describe('TransportOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockWithDataTransportOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label apear when there is no data', () => {
    render(<MockNoDataTransportOverviewTemplate />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure data apear when they are', () => {
    render(<MockWithDataTransportOverviewTemplate />);
    expect(
      screen.getByTestId('transport-overview-list-item-1')
    ).toBeInTheDocument();
  });
});
