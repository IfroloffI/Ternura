import { Meta, StoryObj } from '@storybook/react';
import ContentLayout from '@/layouts/ContentLayout/index';
import Props from './ContentLayout.props';

const meta: Meta<Props> = {
  component: ContentLayout,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-full h-full bg-blue-100 align-middle">placeholder</div>
    ),
  },
};
