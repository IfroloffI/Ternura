import Image from 'next/image';
import icon from '@/assets/icons/plus-polygon-icon.svg';
import {FC} from 'react';
import Props from './RightSliderIcon.props';

const RightSliderIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='18' cy='18' r='18' fill='rgba(0,0,0,0.4)' />
      <g clipPath='url(#clip0_590_4355)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.6073 25.6653C14.1973 25.219 14.1973 24.4953 14.6073 24.049L20.1649 18L14.6073 11.951C14.1973 11.5047 14.1973 10.781 14.6073 10.3347C15.0174 9.88842 15.6822 9.88842 16.0923 10.3347L22.3923 17.1919C22.8023 17.6382 22.8023 18.3618 22.3923 18.8081L16.0923 25.6653C15.6822 26.1116 15.0174 26.1116 14.6073 25.6653Z'
          fill='#ffffff'
        />
      </g>
      <defs>
        <clipPath id='clip0_590_4355'>
          <rect
            width='16'
            height='15'
            fill='white'
            transform='translate(11 26) rotate(-90)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightSliderIcon;
