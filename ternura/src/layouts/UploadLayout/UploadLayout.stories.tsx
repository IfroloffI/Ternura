import { Meta, StoryObj } from '@storybook/react';
import UploadLayout from '@/layouts/UploadLayout/index';
import { uploadLayoutUsecaseDocs } from '@/layouts/UploadLayout/UploadLayout.usecase';
import Props from './UploadLayout.props';

const meta: Meta<Props> = {
  component: UploadLayout,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...uploadLayoutUsecaseDocs,
  },
};
