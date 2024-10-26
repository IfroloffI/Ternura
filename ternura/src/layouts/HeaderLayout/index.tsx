import {FC} from 'react';
import Props from './HeaderLayout.props';

const HeaderLayout: FC<Props> = ({
  leading,
  center,
  trailing,
  className,
  ...props
}) => {
  return (
    <div
      className={`
             w-full h-fit  items-center gap-1 justify-between
             border-b border-grey-light-stroke relative ${className}
             `}
      {...props}>
      <div className='w-fit'>{leading}</div>
      <div className='left-1/2 transform -translate-x-1/2 absolute'>
        {center}
      </div>
      <div className='flex self-center'>{trailing}</div>
    </div>
  );
};

export default HeaderLayout;
