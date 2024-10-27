import { Meta, StoryObj } from '@storybook/react';
import Props from '@/components/common/FormattedText/FormattedText.props';
import FormattedText from '@/components/common/FormattedText';

const ActionsData = {};

const meta: Meta<Props> = {
  component: FormattedText,
  args: { ...ActionsData },
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    children: "it's basic text",
  },
};

export const Tel: Story = {
  args: {
    type: 'tel',
    children: '+78005353535',
  },
};

export const Custom: Story = {
  args: {
    children: 'text?',
    customFormatter: value => `lolo-${value}-loshka`,
  },
};
