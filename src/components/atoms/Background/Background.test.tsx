import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { Background } from './Background.component';

const mockOnClickBackground = vi.fn();

describe('Background', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <Background>
          <div
            id="exaple-side-menu"
            style={{
              width: '30%',
              height: '100%',
              background: '#FFF',
            }}
          >
            <p>Example Text</p>
          </div>
        </Background>
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('enusre click on click background works correctly', () => {
    render(
      <StyledComponentsProvider>
        <Background
          dataTestID="atom-background"
          onClickBackground={mockOnClickBackground}
        >
          <div
            id="exaple-side-menu"
            style={{
              width: '30%',
              height: '100%',
              background: '#FFF',
            }}
          >
            <p>Example Text</p>
          </div>
        </Background>
      </StyledComponentsProvider>
    );
    fireEvent.click(screen.getByTestId('atom-background'));
    expect(mockOnClickBackground).toHaveBeenCalled();
  });
});
