import type {FC} from 'react';
import Props from './Card.props';
import MyCarousel from '../Carousel';

const Card: FC<Props> = ({photos, name, surname, years, hobbies}) => {
  return (
    <div className='flex w-full'>
      <MyCarousel picturesSrc={photos} className='w-[70%] max-w-[70%]' />
      <div className='flex flex-col justify-center gap-8 w-[30%] '>
        <p className='font-bold'>{`${name} ${surname}, ${years} лет`}</p>
        <p>Увлекается:</p>
        <div className='flex flex-col gap-4'>
          {hobbies.map((hobby, index) => {
            return <p key={index}>{hobby}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
