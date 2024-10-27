import Image from 'next/image';
import { FC } from 'react';
import iconEmpty from '../../../assets/icons/avatar-empty-icon.svg';
import iconOutlined from '../../../assets/icons/avatar-outlined-icon.svg';
import Props from './AvatarEmptyIcon.props';


const getIconfromVariant = (variant: string) => {
  switch (variant) {
    case 'filled':
      return iconEmpty;
    default:
      return iconOutlined;
  }
};


const AvatarEmptyIcon: FC<Props> = ({
  width,
  height,
  variant,
  className,
  ...props
}) => {
  return (
    <Image
      src={getIconfromVariant(variant)}
      width={width}
      height={height}
      alt='empty/outlined profile icon'
      className={className}
      {...props}
    />
  );
};

export default AvatarEmptyIcon;
