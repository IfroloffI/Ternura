import Props from '@/components/MenuPopup/components/MenuTile/MenuTile.props';
import { FC } from 'react';
import Link from 'next/link';

const MenuTile: FC<Props> = ({
  onClick,
  path,
  active = false,
  icon,
  children,
}) => {
  const button = (
    <button
      onClick={onClick}
      className={`
            flex
            text-sm font-semibold leading-4 text-left hover:text-gray-800
            ${active ? 'text-gray-800' : 'text-gray-500'}
            `}
    >
      {icon}
      <div className="w-2" />
      {children}
    </button>
  );

  if (!path) {
    return button;
  }

  return <Link href={path as string}>{button}</Link>;
};
export default MenuTile;
