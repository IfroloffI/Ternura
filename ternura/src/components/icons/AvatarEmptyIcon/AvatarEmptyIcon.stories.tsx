import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import AvatarEmptyIcon from './index';
import Props from './AvatarEmptyIcon.props';

const meta: Meta<Props> = {
  component: AvatarEmptyIcon,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: { variant: 'outlined' },
};

export const Filled: Story = {
  args: { variant: 'filled' },
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
};
