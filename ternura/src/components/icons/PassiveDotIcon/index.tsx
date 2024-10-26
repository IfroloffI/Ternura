import Image from 'next/image';
import icon from '@/assets/icons/passive-dot-icon.svg';
import React, { FC } from 'react';
import Props from './PassiveDotIcon.props';

const PassiveDotIcon: FC<Props> = ({ className, ...props }) => {
  return (
    <Image
      src={icon}
      alt="passive-dot-icon"
      className={`mb-4 me-2 ${className}`}
      {...props}
    />
  );
};

export default PassiveDotIcon;
