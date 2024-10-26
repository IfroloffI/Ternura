import {Meta, StoryObj} from '@storybook/react';
import Props from './Card.props';
import  Card  from '.';

const ActionsData = {};

const meta: Meta<Props> = {
  component: Card,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    photos: [''],
    name: 'Яна',
    surname: 'Гаврилова',
    years: 19,
    hobbies: ['чтение', 'программирование', 'игра на гитаре'],
  },
};
