import { Meta, StoryObj } from '@storybook/react';
import MenuPopup from '@/components/MenuPopup/index';
import Props from '@/components/MenuPopup/MenuPopup.props';
import AvatarEmptyIcon from '@/components/icons/AvatarEmptyIcon';
import {
  DocsTile,
  ExitTile,
  SettingsTile,
  ActiveListTile,
} from '@/components/MenuPopup/components/MenuTile/MenuTile.stories';
import MenuTile from '@/components/MenuPopup/components/MenuTile';
import { Button } from '@chakra-ui/react';
import { HomeIcon } from '@storybook/icons';

const meta: Meta<Props> = {
  component: MenuPopup,
};

export default meta;

type Story = StoryObj<Props>;

const baseProps = {
  navBar: (
    <>
      <MenuTile {...ActiveListTile.args} />
      <MenuTile {...SettingsTile.args} />
      <MenuTile {...DocsTile.args} />
      <MenuTile {...ExitTile.args} />
    </>
  ),
  actions: (
    <>
      <p>
        Ваш эксперт HomeAuction:
        <span className="font-semibold"> Михаил У.</span>
      </p>
      <Button
        hugHeight
        icon={<HomeIcon />}
        className={`
                        !rounded-md
                        !text-xs !font-semibold !leading-3 
                        !bg-yellow-300 !hover:bg-yellow
                        `}
      >
        Связаться
      </Button>
    </>
  ),
  children: <AvatarEmptyIcon variant="outlined" />,
};

export const Active: Story = {
  args: {
    state: true,
    ...baseProps,
  },
};

export const Interactive: Story = {
  args: {
    ...baseProps,
    children: <AvatarEmptyIcon variant="outlined" />,
  },
};
