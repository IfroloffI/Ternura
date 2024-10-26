import {Meta, StoryObj} from '@storybook/react';
import Props from './MainHeader.props';
import { MainHeader } from '.';

const ActionsData = {};

const meta: Meta<Props> = {
  component: MainHeader,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    
  },
};
