import { Meta, StoryObj } from '@storybook/react';
import Props from '@/components/UserData/UserData.props';
import UserData from '@/components/UserData/index';
import { userDataPlaceholder } from '@/components/UserData/UserData.usecase';

const meta: Meta<Props> = {
  component: UserData,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...userDataPlaceholder,
  },
};
