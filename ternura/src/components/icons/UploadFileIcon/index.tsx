import Image from 'next/image';
import icon from '@/assets/icons/upload-file-icon.svg';
import { FC } from 'react';
import Props from './UploadFileIcon.props';

const UploadFileIcon: FC<Props> = ({ className, ...props }) => {
  return (
    <Image src={icon} alt="upload icon" className={className} {...props} />
  );
};

export default UploadFileIcon;
