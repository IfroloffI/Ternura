import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Props from '@/components/icons/NavIcon/NavIcon.props';

import docsIcon from '@/assets/icons/docs-icon.png';
import exitIcon from '@/assets/icons/exit-icon.png';
import listIcon from '@/assets/icons/list-icon.png';
import settingsIcon from '@/assets/icons/settings-icon.png';

const variants: Record<string, StaticImageData> = {
  docs: docsIcon,
  exit: exitIcon,
  list: listIcon,
  settings: settingsIcon,
};

const NavIcon: FC<Props> = ({ variant, ...props }) => (
  <Image
    src={variants[variant]}
    className="w-4 h-4 block"
    alt=" nav icon"
    {...props}
  />
);

export default NavIcon;
