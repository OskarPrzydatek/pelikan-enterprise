import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { Text } from '~/components/atoms';
import { StyledComponentsProvider } from '~/providers';

import { ErrorBundaryLoader } from './ErrorBundaryLoader';

const MockErrorBundaryLoader = ({
  error,
  isLoading,
}: {
  error: Error | undefined;
  isLoading: boolean;
}) => (
  <StyledComponentsProvider>
    <ErrorBundaryLoader error={error} isLoading={isLoading}>
      <Text dataTestID="page-layout-content">Content!!!</Text>
    </ErrorBundaryLoader>
  </StyledComponentsProvider>
);

describe('ErrorBundaryLoader', () => {
  test('component snapshot', () => {
    const view = render(
      <MockErrorBundaryLoader error={undefined} isLoading={false} />
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure page layout renders correct layout', () => {
    const { rerender } = render(
      <MockErrorBundaryLoader isLoading error={undefined} />
    );
    expect(screen.getByTestId('page-layout-loading')).toBeInTheDocument();
    rerender(<MockErrorBundaryLoader error={new Error()} isLoading={false} />);
    expect(screen.getByTestId('page-layout-error')).toBeInTheDocument();
    rerender(<MockErrorBundaryLoader error={undefined} isLoading={false} />);
    expect(screen.getByTestId('page-layout-content')).toBeInTheDocument();
  });
});
