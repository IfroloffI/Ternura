import Image from 'next/image';
import { FC } from 'react';
import iconEmpty from '../../../assets/icons/avatar-empty-icon.svg';
import Props from './AvatarEmptyIcon.props';


const AvatarEmptyIcon: FC<Props> = ({
  width,
  height,
  className,
  ...props
}) => {
  return (
    <Image
      src={iconEmpty}
      width={width}
      height={height}
      alt='empty/outlined profile icon'
      className={className}
      {...props}
    />
  );
};

export default AvatarEmptyIcon;
