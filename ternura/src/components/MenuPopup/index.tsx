import {forwardRef} from 'react';
import Props from '@/components/MenuPopup/MenuPopup.props';
import {
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react';


const MenuPopup = forwardRef<HTMLDivElement, Props>(
  (
    {isOpen, onClose, onOpen, children, navBar, onChangeState, actions},
    ref,
  ) => (
    <Popover
      closeOnEsc
      closeOnBlur
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement='bottom-end'>
      <PopoverTrigger>
        <div className='w-fit cursor-pointer' onClick={onClose}>
          {children}
        </div>
      </PopoverTrigger>
      <PopoverContent width='fit-content'>
        <PopoverBody padding='initial'>
          <div
            className={`
                        w-64
                        p-6
                        flex flex-col gap-5
                        `}
            ref={ref} // Forward the ref here
          >
            {navBar}
            {/* <hr className="border-t-2 border-gray-350" /> */}
            {actions}
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ),
);

MenuPopup.displayName = 'MenuPopup';

export default MenuPopup;
