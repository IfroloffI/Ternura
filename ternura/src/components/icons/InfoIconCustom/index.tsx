import { InfoIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import { useDisclosure } from '@chakra-ui/hooks';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function InfoIconCustom({ label }: { label: string }) {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  return (
    <Tooltip isOpen={isOpen} label={label} placement={'bottom-start'}>
      <InfoIcon
        className={cx('info-icon')}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={onToggle}
      />
    </Tooltip>
  );
}

export { InfoIconCustom };
