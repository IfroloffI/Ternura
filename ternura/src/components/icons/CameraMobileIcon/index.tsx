import { FC } from 'react';
import icon from '@/assets/icons/camera-mobile-icon.svg';
import Image from 'next/image';
import Props from './CameraMobileIcon.props';

const CameraMobileIcon: FC<Props> = ({ className, ...props }) => {
  return (
    <Image src={icon} alt="camera-mobile" className={className} {...props} />
  );
};

export default CameraMobileIcon;
