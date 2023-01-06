import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { Header } from './Header.component';

describe('Header', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Header dataTestID="header-atom">String Header</Header>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure header children renders correctly', () => {
    render(
      <StyledComponentsProvider>
        <Header dataTestID="header-atom">String Header</Header>
      </StyledComponentsProvider>
    );
    const header = screen.getByTestId('header-atom');
    expect(header).toHaveTextContent('String Header');
  });
});
