import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Header } from './Header';

const MockHeader = () => (
  <StyledComponentsProvider>
    <Header dataTestID="header-atom">Add Offer</Header>
  </StyledComponentsProvider>
);

describe('Header', () => {
  test('component snapshot', () => {
    const view = render(<MockHeader />);
    expect(view).toMatchSnapshot();
  });

  test('ensure header children renders correctly', () => {
    render(<MockHeader />);
    const header = screen.getByTestId('header-atom');
    expect(header).toHaveTextContent('Add Offer');
  });
});
