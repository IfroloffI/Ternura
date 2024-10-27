import type {FC} from 'react';
import Props from './Card.props';
import MyCarousel from '../MyCarousel';
import {Button} from '@chakra-ui/react';
import FavoriteButton from '../icons/FavoriteButton';
import CorrectIcon from '../icons/CorrcetIcon';

const Card: FC<Props> = ({profile, handleNext, handlePrev}) => {
  console.log(profile);
  return (
    <div className='flex w-full items-center h-full'>
      <div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
        <MyCarousel
          picturesSrc={profile?.photoURLs}
          className='w-[70%] max-w-[70%] '
        />
        <div className='flex items-center justify-between gap-2 w-[30%]'>
          <Button
            onClick={handlePrev}
            className='aspect-square  mx-auto my-auto '>
            {'<'}
          </Button>
          <FavoriteButton />
          <FavoriteButton isFav={false} />
          <Button
            onClick={handleNext}
            className='aspect-square h-full mx-auto my-auto '>
            {'>'}
          </Button>
        </div>
      </div>

      <div className='flex flex-col justify-center border h-fit items-center rounded-lg p-10 gap-8 w-[30%] shadow-shadow_3'>
        <p className='font-bold'>{`${profile?.name} ${profile?.surname}, ${profile?.birth} лет`}</p>
        <p className='justify-start w-full'>Увлекается:</p>
        <div className='flex flex-col gap-4 items-start w-full'>
          {profile?.interests?.map((hobby, index) => {
            return (
              <p key={index} className='flex gap-2 items-center'>
                <CorrectIcon />
                {hobby}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
