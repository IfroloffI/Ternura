'use client';
import Card from '@/components/Card';
import {MainHeader} from '@/components/MainHeader';
import {CardDefault} from '@/components/Card/Card.usecase';

export default function SearchPage() {
  return (
    <div className='w-full h-full flex flex-col gap-10 '>
      <MainHeader />
      <Card {...CardDefault} />
    </div>
  );
}
