import {Meta, StoryObj} from '@storybook/react';
import Props from './Carousel.props';
import MyCarousel from '.';
import { picturesSrc } from './Carousel.usecase';

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
