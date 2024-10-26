import {FC, useState} from 'react';
import Carousel from 'react-gallery-carousel';
import Props from './MyCarousel.props';
import Image from 'next/image';
import LeftSliderIcon from '../icons/LeftSliderIcon';
import RightSliderIcon from '../icons/RightSliderIcon';

const MyCarousel: FC<Props> = ({picturesSrc, className, ...props}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % picturesSrc.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + picturesSrc.length) % picturesSrc.length,
    );
  };

  return (
    <div
      className={`relative h-full w-full max-w-[100vw] rounded-xl aspect-[9/5] ${className}`}
      {...props}>
      <Image
        src={picturesSrc[currentIndex]}
        alt={'photo'}
        width={270}
        height={200}
        className={`mx-auto object-cover rounded-xl`}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />
      <div
        className='w-fit h-fit absolute top-1/2 left-28 cursor-pointer'
        onClick={handlePrev}>
        <LeftSliderIcon />
      </div>
      <div
        className='w-fit h-fit absolute top-1/2 right-28 cursor-pointer'
        onClick={handleNext}>
        <RightSliderIcon />
      </div>
    </div>
  );
};

export default MyCarousel;
