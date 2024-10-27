import Image from 'next/image';
import icon from '@/assets/icons/correct-icon.svg';
import React, {FC} from 'react';
import Props from './CorrcetIcon.props';

const CorrectIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={icon}
      alt='active-dot-icon'
      width={10}
      height={10}
      className={`${className}`}
      {...props}
    />
  );
};

export default CorrectIcon;
