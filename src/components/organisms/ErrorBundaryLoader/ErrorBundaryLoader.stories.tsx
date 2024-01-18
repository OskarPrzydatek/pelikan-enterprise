import { Meta, StoryObj } from '@storybook/react';

import { Text } from '~/components/atoms';
import { StyledComponentsProvider } from '~/providers';

import { ErrorBundaryLoader } from './ErrorBundaryLoader';

const meta: Meta<typeof ErrorBundaryLoader> = {
  title: 'Organisms/ErrorBundaryLoader',
  component: ErrorBundaryLoader,
};

export default meta;
type Story = StoryObj<typeof ErrorBundaryLoader>;

export const ErrorBundaryLoaderLoading: Story = {
  render: () => (
    <StyledComponentsProvider>
      <ErrorBundaryLoader isLoading error={undefined}>
        <Text>Content</Text>
      </ErrorBundaryLoader>
    </StyledComponentsProvider>
  ),
};

export const ErrorBundaryLoaderError: Story = {
  render: () => (
    <StyledComponentsProvider>
      <ErrorBundaryLoader error={new Error()} isLoading={false}>
        <Text>Content</Text>
      </ErrorBundaryLoader>
    </StyledComponentsProvider>
  ),
};

export const ErrorBundaryLoaderDataLoaded: Story = {
  render: () => (
    <StyledComponentsProvider>
      <ErrorBundaryLoader error={undefined} isLoading={false}>
        <Text>Content!!!</Text>
      </ErrorBundaryLoader>
    </StyledComponentsProvider>
  ),
};
