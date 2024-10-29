import { Meta, StoryObj } from '@storybook/react';
import NavIcon from '@/components/icons/NavIcon/index';
import Props from '@/components/icons/NavIcon/NavIcon.props';

const meta: Meta<Props> = {
  component: NavIcon,
};

export default meta;

type Story = StoryObj<Props>;

export const Docs: Story = { args: { variant: 'docs' } };
export const Exit: Story = { args: { variant: 'exit' } };
export const List: Story = { args: { variant: 'list' } };
export const Settings: Story = { args: { variant: 'settings' } };
