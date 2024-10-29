import Image from 'next/image';
import logo from '@/assets/icons/logo.png';
import React, {FC} from 'react';
import Props from './Logo.props';

const LogoIcon: FC<Props> = ({className, ...props}) => {
  return <Image src={logo} alt='logo-icon' className={className} {...props} />;
};

export default LogoIcon;
