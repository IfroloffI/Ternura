import AvatarEmptyIcon from '@/components/icons/AvatarEmptyIcon';
import FormattedText from '../FormattedText';
import Props from '@/components/UserData/UserData.props';
import {FC, useCallback, useRef, ChangeEvent, useState} from 'react';
import Link from 'next/link';
import {Button, Image} from '@chakra-ui/react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const UserData: FC<Props> = ({
  fullName,
  phone,
  photoUrl: initialPhotoUrl,
  rightIcon,
  photoVariant,
  className,
  enableChangePhoto = true,
  ...props
}) => {
  const [photoUrl, setPhotoUrl] = useState(initialPhotoUrl);
  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleClick = useCallback(() => {
    inputFile.current?.click();
  }, [inputFile]);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [],
  );

  return (
    <>
      <input
        type='file'
        id='file'
        ref={inputFile}
        style={{display: 'none'}}
        onChange={handleFileChange}
      />
      <div
        className={`hidden md:flex items-center shadow-shadow_3_mobile text-gray-800 w-fit md:shadow-none p-0 rounded-none ${className}`}
        {...props}>
        <div onClick={handleClick} className={cx('photo')}>
          {photoUrl ? (
            <Image
              borderRadius='full'
              boxSize='150px'
              objectFit={'cover'}
              src={photoUrl}
            />
          ) : (
            <AvatarEmptyIcon variant={photoVariant} className='w-36 h-36' />
          )}
        </div>
        <div className='text-xl font-semibold leading-6 text-left flex flex-col gap-6'>
          <p>{fullName}</p>
          <FormattedText type='tel'>{phone}</FormattedText>
        </div>
      </div>
    </>
  );
};

export default UserData;
