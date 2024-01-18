import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { hashtagDataMock } from '~/mocks';
import { StyledComponentsProvider } from '~/providers';

import { HashtagOverviewTemplate } from './HashtagOverviewTemplate';

const mockOnClickDelete = vi.fn();
const mockOnClickEdit = vi.fn();
const mockOnClickNavigateToCreatePage = vi.fn();

const MockNoDataHashtagOverviewTemplate = () => (
  <StyledComponentsProvider>
    <HashtagOverviewTemplate
      data={undefined}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

const MockWithDataHashtagOverviewTemplate = () => (
  <StyledComponentsProvider>
    <HashtagOverviewTemplate
      data={hashtagDataMock}
      error={undefined}
      isLoading={false}
      onClickDelete={mockOnClickDelete}
      onClickEdit={mockOnClickEdit}
      onClickNavigateToCreatePage={mockOnClickNavigateToCreatePage}
    />
  </StyledComponentsProvider>
);

describe('HashtagOverviewTemplate', () => {
  test('component snapshot', () => {
    const view = render(<MockWithDataHashtagOverviewTemplate />);
    expect(view).toMatchSnapshot();
  });

  test('ensure no items label apear when there is no data', () => {
    render(<MockNoDataHashtagOverviewTemplate />);
    expect(screen.getByTestId('no-items-label')).toBeInTheDocument();
  });

  test('ensure data apear when they are', () => {
    render(<MockWithDataHashtagOverviewTemplate />);
    expect(
      screen.getByTestId('hashtag-overview-list-item-1')
    ).toBeInTheDocument();
  });
});
