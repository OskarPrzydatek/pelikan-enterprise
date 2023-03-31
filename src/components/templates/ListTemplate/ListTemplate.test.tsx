import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { StyledComponentsProvider } from '~/styles';

import { ListTemplate } from './ListTemplate.component';

describe('ListTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <ListTemplate page="1" title="Lista Ofert" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('ensure page number is handled correctly', () => {
    const { rerender } = render(
      <StyledComponentsProvider>
        <ListTemplate page={undefined} title="Lista Ofert" />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('page-number')).toHaveTextContent('page: 1');
    rerender(
      <StyledComponentsProvider>
        <ListTemplate page="2" title="Lista Ofert" />
      </StyledComponentsProvider>
    );
    expect(screen.getByTestId('page-number')).toHaveTextContent('page: 2');
  });
});
