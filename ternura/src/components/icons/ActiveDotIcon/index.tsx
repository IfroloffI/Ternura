import Image from 'next/image';
import icon from '@/assets/icons/active-dot-icon.svg';
import React, { FC } from 'react';
import Props from './ActiveDotIcon.props';

const ActiveDotIcon: FC<Props> = ({ className, ...props }) => {
  return (
    <Image
      src={icon}
      alt="active-dot-icon"
      className={`mb-4 me-2 ${className}`}
      {...props}
    />
  );
};

export default ActiveDotIcon;
