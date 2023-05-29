import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { CreateHashtagTemplateHelper } from '~/helpers';

const mockOnSubmitCreateHashtag = vi.fn();

describe('CreateHashtag Template', () => {
  test('component snapshot', () => {
    const view = render(
      <CreateHashtagTemplateHelper
        onSubmitCreateHashtag={mockOnSubmitCreateHashtag}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
