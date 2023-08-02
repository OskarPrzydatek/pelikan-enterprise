import { Meta, StoryObj } from '@storybook/react';

import { Text } from '~/components/atoms';
import { StyledComponentsProvider } from '~/providers';

import { PageLayout } from './PageLayout';

const meta: Meta<typeof PageLayout> = {
  title: 'Organisms/PageLayout',
  component: PageLayout,
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const PageLayoutLoading: Story = {
  render: () => (
    <StyledComponentsProvider>
      <PageLayout isLoading error={undefined}>
        <Text>Content</Text>
      </PageLayout>
    </StyledComponentsProvider>
  ),
};

export const PageLayoutError: Story = {
  render: () => (
    <StyledComponentsProvider>
      <PageLayout error={new Error()} isLoading={false}>
        <Text>Content</Text>
      </PageLayout>
    </StyledComponentsProvider>
  ),
};

export const PageLayoutDataLoaded: Story = {
  render: () => (
    <StyledComponentsProvider>
      <PageLayout error={undefined} isLoading={false}>
        <Text>Content!!!</Text>
      </PageLayout>
    </StyledComponentsProvider>
  ),
};
