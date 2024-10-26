import type {FC} from 'react';
import Props from '@/components/MainHeader/MainHeader.props';
import LogoIcon from '../icons/Logo';
import HeaderLayout from '@/layouts/HeaderLayout';
import {divide} from 'lodash';
import {usePathname} from 'next/navigation';
import {navigationTabs} from './MainHeader.usecase';
import Link from 'next/link';

const getTabTileClassNames = ({isActive}: {isActive: boolean}): string => {
  return `
        align-baseline
        py-2
        !text-black hover:underline 
        underline-offset-8 transition-all duration-200 decoration-purpleMain decoration-2
        text-nowrap
        ${isActive ? 'underline' : '!text-gray-500'} 
    `;
};

const MainHeader: FC<Props> = ({activePath}) => {
  const activeNextPathName = usePathname();
  activePath = activePath === undefined ? activeNextPathName : activePath;

  return (
    <HeaderLayout
      className='!h-24 hidden text-gray  md:flex justify-between items-center px-20 py-6 w-full'
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
              className={` ${getTabTileClassNames({
                isActive: path === activePath,
              })}`}>
              <Link
                href={path as string}
                className='md:text-xs  xl:text-base lg:text-sm sm:text-xs text-xs font-semibold'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
      trailing={<div>end</div>}
    />
  );
};

export {MainHeader};
