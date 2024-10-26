import {FC, useState} from 'react';
import Props from './MyCarousel.props';
import Image from 'next/image';
import LeftSliderIcon from '../icons/LeftSliderIcon';
import RightSliderIcon from '../icons/RightSliderIcon';

const MyCarousel: FC<Props> = ({picturesSrc, className, ...props}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % picturesSrc.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + picturesSrc.length) % picturesSrc.length,
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        className={`mx-auto object-cover rounded-xl cursor-pointer`}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
        onClick={openModal} // Открываем модальное окно при нажатии на изображение
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

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'
          onClick={closeModal}>
          <Image
            src={picturesSrc[currentIndex]}
            alt={'photo'}
            width={200}
            height={300}
            className='object-cover !h-full !w-auto'
          />
        </div>
      )}
    </div>
  );
};

export default MyCarousel;
