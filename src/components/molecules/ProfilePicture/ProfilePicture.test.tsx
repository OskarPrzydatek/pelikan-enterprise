import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { StyledComponentsProvider } from '~/providers';

import { ProfilePicture } from './ProfilePicture';

const MockProfilePicture = () => (
  <StyledComponentsProvider>
    <ProfilePicture label="Witaj User" />
  </StyledComponentsProvider>
);

describe('ProfilePicture', () => {
  test('component snapshot', () => {
    const view = render(<MockProfilePicture />);
    expect(view).toMatchSnapshot();
  });
});
