import { Meta, StoryObj } from '@storybook/react';
import Props from '@/layouts/HeaderLayout/HeaderLayout.props';
import HeaderLayout from '@/layouts/HeaderLayout';

const meta: Meta<Props> = {
  component: HeaderLayout,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    leading: 'leading',
    center: 'center',
    trailing: 'trailing',
  },
};
