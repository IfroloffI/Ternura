'use client';
import {useRef, type FC} from 'react';
import Props from '@/components/MainHeader/MainHeader.props';
import LogoIcon from '../icons/Logo';
import HeaderLayout from '@/layouts/HeaderLayout';
import {usePathname} from 'next/navigation';
import {navigationTabs} from './MainHeader.usecase';
import Link from 'next/link';
import styles from './MainHeader.module.css';
import AvatarEmptyIcon from '../icons/AvatarEmptyIcon';
import MenuTile from '../MenuPopup/components/MenuTile';
import MenuPopup from '../MenuPopup';
import {useOutsideClick, useDisclosure} from '@chakra-ui/hooks';
import NavIcon from '../icons/NavIcon';

const getTabTileClassNames = ({isActive}: {isActive: boolean}): string => {
  return `
        align-baseline
        py-2
        !text-black
        underline-offset-8 transition-all duration-200 decoration-purpleMain decoration-2
        text-nowrap
        ${isActive ? 'underline' : '!text-gray-500'} 
    `;
};

const MainHeader: FC<Props> = ({activePath}) => {
  const activeNextPathName = usePathname();
  const currentActivePath = activePath ?? activeNextPathName; // Используем оператор нулевого слияния
  const ref = useRef(null);
  const {onOpen, isOpen, onClose} = useDisclosure();

  useOutsideClick({
    ref,
    handler: () => {
      if (isOpen) onClose();
    },
  });

  return (
    <HeaderLayout
      className='!h-24 hidden text-gray md:flex justify-between items-center py-6 w-full'
      leading={
        <div className='flex gap-2'>
          <LogoIcon className='!w-10 !h-10 aspect-square' height={40} />
          <p className='text-3xl text-gray'>
            Ter<span className='text-purpleMain'>ñura</span>
          </p>
        </div>
      }
      center={
        <ul className='flex sm:gap-2 md:gap-2 lg:gap-6 xl:gap-8 font-semibold mx-auto'>
          {navigationTabs.map(({path, title}) => (
            <li
              key={path}
              className={`${styles.basic} ${getTabTileClassNames({
                isActive: path === currentActivePath,
              })}`}>
              <Link
                href={path as string}
                className='md:text-xs xl:text-base lg:text-sm sm:text-xs text-xs font-semibold'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
      trailing={<AvatarEmptyIcon width={32} height={32} />}
    />
  );
};

export {MainHeader};
