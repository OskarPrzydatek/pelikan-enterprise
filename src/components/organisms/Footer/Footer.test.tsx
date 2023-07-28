import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Footer } from './Footer';

const MockFooter = () => (
  <StyledComponentsProvider>
    <Footer version="0.0.1" />
  </StyledComponentsProvider>
);

describe('Footer', () => {
  test('component snapshot', () => {
    const view = render(<MockFooter />);
    expect(view).toMatchSnapshot();
  });

  test('ensure version renders correctly', () => {
    render(<MockFooter />);
    const appVesionText = screen.getByTestId('app-version');
    expect(appVesionText).toHaveTextContent('Pelikan Business v0.0.1');
  });
});
