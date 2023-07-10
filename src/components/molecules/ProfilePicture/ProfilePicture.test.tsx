import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { ProfilePicture } from './ProfilePicture';

describe('ProfilePicture', () => {
  test('component snapshot', () => {
    const view = render(
      <StyledComponentsProvider>
        <ProfilePicture label="Witaj User" />
      </StyledComponentsProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
