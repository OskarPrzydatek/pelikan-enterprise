import { FieldType } from '~/constants';

import { FieldRenderer } from './FieldRenderer.component';
import { FieldRendererHelper } from './FieldRenderer.helper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FieldRenderer> = {
  title: 'Organisms/FieldRenderer',
  component: FieldRenderer,
};

export default meta;
type Story = StoryObj<typeof FieldRenderer>;

export const FieldRendererTextField: Story = {
  render: () => (
    <FieldRendererHelper name="text" type={FieldType.TEXT_FIELD} />
  ),
};

export const FieldRendererNumericField: Story = {
  render: () => (
    <FieldRendererHelper name="text" type={FieldType.NUMERIC_FIELD} />
  ),
};

export const FieldRendererTextArea: Story = {
  render: () => (
    <FieldRendererHelper name="text" type={FieldType.TEXT_AREA} />
  ),
};

export const FieldRendererStarField: Story = {
  render: () => (
    <FieldRendererHelper name="text" type={FieldType.STAR_FIELD} />
  ),
};

export const FieldRendererSelect: Story = {
  render: () => (
    <FieldRendererHelper
      name="text"
      type={FieldType.SELECT}
      selectOptions={[
        { value: 'TRANSPORT_A', label: 'Transport A' },
        { value: 'TRANSPORT_B', label: 'Transport B' },
        { value: 'TRANSPORT_C', label: 'Transport C' },
      ]}
    />
  ),
};

export const FieldRendererDate: Story = {
  render: () => <FieldRendererHelper name="text" type={FieldType.DATE} />,
};
