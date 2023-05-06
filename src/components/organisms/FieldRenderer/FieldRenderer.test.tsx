import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { FieldType } from '~/constants';

import { FieldRendererHelper } from './FieldRenderer.helper';

describe('FieldRenderer', () => {
  test('component snapshot', () => {
    const view = render(
      <FieldRendererHelper name="textField" type={FieldType.TEXT_AREA} />
    );
    expect(view).toMatchSnapshot();
  });
  test('ensure select options is empty array in default', () => {});

  describe('FieldRenderer - correct type rendering', () => {
    test('ensure TEXT field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-text-field"
          name="textField"
          type={FieldType.TEXT_FIELD}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-text-field')
      ).toBeInTheDocument();
    });
    test('ensure NUMBER field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-numeric-field"
          name="numericField"
          type={FieldType.NUMERIC_FIELD}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-numeric-field')
      ).toBeInTheDocument();
    });
    test('ensure STAR field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-star-field"
          name="starField"
          type={FieldType.STAR_FIELD}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-star-field')
      ).toBeInTheDocument();
    });
    test('ensure AREA field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-text-area"
          name="textArea"
          type={FieldType.TEXT_AREA}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-text-area')
      ).toBeInTheDocument();
    });
    test('ensure SELECT field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-select"
          name="select"
          type={FieldType.SELECT}
          selectOptions={[
            { label: 'Option 1', value: 'OPTION_1' },
            { label: 'Option 2', value: 'OPTION_2' },
          ]}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-select')
      ).toBeInTheDocument();
    });
    test('ensure DATE field renders correctly', () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-date"
          name="date"
          type={FieldType.DATE}
        />
      );
      expect(
        screen.getByTestId('orgaism-field-renderer-date')
      ).toBeInTheDocument();
      test('ensure UNKNOWN field renders correctly', () => {
        render(
          <FieldRendererHelper
            dataTestID="orgaism-field-renderer-unknown-field"
            name="unknown"
            type={'UNKNOWN' as FieldType}
          />
        );
        expect(
          screen.queryByTestId('orgaism-field-renderer-unknown-field')
        ).not.toBeInTheDocument();
      });
    });
    test(`ensure UNKNOWN field type doesn't render any field`, () => {
      render(
        <FieldRendererHelper
          dataTestID="orgaism-field-renderer-unknown-field"
          name="unknown"
          type={'UNKNOWN' as FieldType}
        />
      );
      expect(
        screen.queryByTestId('orgaism-field-renderer-unknown-field')
      ).not.toBeInTheDocument();
    });
  });
});
