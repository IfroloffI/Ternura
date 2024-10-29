import {Meta, StoryObj} from '@storybook/react';
import Props from './MyCarousel.props';
import MyCarousel from '.';
import {picturesSrc} from './MyCarousel.usecase';

const ActionsData = {};

const meta: Meta<Props> = {
  component: MyCarousel,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    picturesSrc: picturesSrc,
  },
};
