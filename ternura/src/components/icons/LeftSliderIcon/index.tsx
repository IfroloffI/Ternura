import Image from 'next/image';
import icon from '@/assets/icons/plus-polygon-icon.svg';
import {FC} from 'react';
import Props from './LeftSliderIcon.props';

const LeftSliderIcon: FC<Props> = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='18'
        cy='18'
        r='18'
        transform='rotate(180 18 18)'
        fill='rgba(0,0,0,0.4)'
      />
      <g clipPath='url(#clip0_590_4353)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.3927 10.3347C21.8027 10.781 21.8027 11.5047 21.3927 11.951L15.8351 18L21.3927 24.049C21.8027 24.4953 21.8027 25.219 21.3927 25.6653C20.9826 26.1116 20.3178 26.1116 19.9077 25.6653L13.6077 18.8081C13.1977 18.3618 13.1977 17.6382 13.6077 17.1919L19.9077 10.3347C20.3178 9.88842 20.9826 9.88842 21.3927 10.3347Z'
          fill='#ffffff'
        />
      </g>
      <defs>
        <clipPath id='clip0_590_4353'>
          <rect
            width='16'
            height='15'
            fill='white'
            transform='translate(25 10) rotate(90)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LeftSliderIcon;
