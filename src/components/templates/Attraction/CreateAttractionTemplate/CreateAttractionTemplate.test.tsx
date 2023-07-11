import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateAttractionTemplateHelper } from './CreateAttractionTemplateHelper';

const mockOnSubmitCreateAttraction = vi.fn();

describe('CreateAttractionTemplate', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateAttractionTemplateHelper
        onSubmitCreateAttraction={mockOnSubmitCreateAttraction}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
