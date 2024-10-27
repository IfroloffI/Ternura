import {memo, useCallback, type HTMLAttributes, type FC, useState} from 'react';
import {Button, IconButton} from '@chakra-ui/react';
import defaultIcon from '@/assets/icons/loved-icon-default-icon.svg';
import filledIcon from '@/assets/icons/loved-icon-filled-icon.svg';
import defaultDislike from '@/assets/icons/dislike-icon.svg';
import filledDislike from '@/assets/icons/dislike-icon-active.svg';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  // adId: number;
  width?: string;
  isFav?: boolean;
  height?: string;
}

const FavoriteButton: FC<Props> = ({
  width,
  height,
  isFav = true,
  className,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => setIsFavorite(prev => !prev);

  const Icon: FC<Props> = () => {
    return (
      <Image
        src={
          isFav
            ? isFavorite
              ? filledIcon
              : defaultIcon
            : isFavorite
            ? filledDislike
            : defaultDislike
        }
        alt='favorite-icon'
        style={{
          height: '40px',
          minHeight: '40px',
          maxHeight: '40px',
          width: '40px',
          minWidth: '40px',
          maxWidth: '40px',
        }}
      />
    );
  };

  return (
    <IconButton
      icon={<Icon />}
      padding={0}
      w='fit-content'
      minH={'min-content'}
      maxH={'min-content'}
      minW={'fit-content'}
      maxW={'fit-content'}
      h='min-content'
      onClick={handleFavoriteClick}
      className={`!aspect-square !p-0 ${className}`}
      aria-label='favorite-icon'
      {...props}
    />
  );
};

export default memo(FavoriteButton);
