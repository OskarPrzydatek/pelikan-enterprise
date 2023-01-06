import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Footer } from './Footer.component';

const mockVersion = '0.0.1';

describe('Footer', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Footer version={mockVersion} />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure version renders correctly', () => {
    render(
      <StyledComponentsProvider>
        <Footer version={mockVersion} />
      </StyledComponentsProvider>
    );
    const appVesionText = screen.getByTestId('app-version');
    expect(appVesionText).toHaveTextContent(`v${mockVersion}`);
  });
});
