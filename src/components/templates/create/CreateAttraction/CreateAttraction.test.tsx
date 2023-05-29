import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateAttractionTemplateHelper } from '~/helpers';

const mockOnSubmitCreateAttraction = vi.fn();

describe('CreateAttraction Template', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateAttractionTemplateHelper
        onSubmitCreateAttraction={mockOnSubmitCreateAttraction}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
