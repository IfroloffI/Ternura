import { Meta, StoryObj } from '@storybook/react';
import Props from '@/components/MenuPopup/components/MenuTile/MenuTile.props';
import NavIcon from '@/components/icons/NavIcon';
import MenuTile from '@/components/MenuPopup/components/MenuTile/index';

const meta: Meta<Props> = {
  component: MenuTile,
};

export default meta;

type Story = StoryObj<Props>;

const storiesData = [
  { children: 'Документы' },
  { children: 'Настройки профиля' },
  { children: 'Мои аукционы' },
  { children: 'Выйти' },
];

export const ActiveListTile = {
  args: {
    active: true,
    ...storiesData[2],
  },
};
export const ListTile = { args: storiesData[2] };
export const DocsTile = { args: storiesData[0] };
export const ExitTile = { args: storiesData[1] };
export const SettingsTile = { args: storiesData[3] };
