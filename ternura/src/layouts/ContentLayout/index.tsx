import { FC } from 'react';
import Props from './ContentLayout.props';
import { MainHeader } from '@/components/MainHeader';

const ContentLayout: FC<Props> = ({children, className, ...props}) => (
  <div
    className={` bg-transparent w-full min-h-svh md:min-h-full md:h-full  md:shadow-lg relative md:static rounded-2xl md:px-11 md:pb-9 px-3 ${className} `}
    {...props}>
    <MainHeader />
    {children}
  </div>
);

export default ContentLayout;
