'use client';

import Props from '@/layouts/UploadLayout/UploadLayout.props';
import { FC } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadLayout: FC<Props> = ({ onDrop, className, children }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={`${className} w-full`} {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default UploadLayout;
