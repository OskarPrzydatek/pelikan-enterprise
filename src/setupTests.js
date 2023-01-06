import matchers from '@testing-library/jest-dom/matchers';
import 'jest-styled-components';
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
