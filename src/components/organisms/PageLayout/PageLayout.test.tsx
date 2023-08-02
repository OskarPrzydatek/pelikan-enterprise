import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { Text } from '~/components/atoms';
import { StyledComponentsProvider } from '~/providers';

import { PageLayout } from './PageLayout';

const MockPageLayout = ({
  error,
  isLoading,
}: {
  error: Error | undefined;
  isLoading: boolean;
}) => (
  <StyledComponentsProvider>
    <PageLayout error={error} isLoading={isLoading}>
      <Text dataTestID="page-layout-content">Content!!!</Text>
    </PageLayout>
  </StyledComponentsProvider>
);

describe('PageLayout', () => {
  test('component snapshot', () => {
    const view = render(<MockPageLayout error={undefined} isLoading={false} />);
    expect(view).toMatchSnapshot();
  });

  test('ensure page layout renders correct layout', () => {
    const { rerender } = render(<MockPageLayout isLoading error={undefined} />);
    expect(screen.getByTestId('page-layout-loading')).toBeInTheDocument();
    rerender(<MockPageLayout error={new Error()} isLoading={false} />);
    expect(screen.getByTestId('page-layout-error')).toBeInTheDocument();
    rerender(<MockPageLayout error={undefined} isLoading={false} />);
    expect(screen.getByTestId('page-layout-content')).toBeInTheDocument();
  });
});
