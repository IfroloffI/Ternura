import {FC} from 'react';
import Props from './FormattedText.props';
import {formatPhoneNumber} from '../Input/helpers';

const formatters: Record<string, (value: string) => string | undefined> = {
  tel: formatPhoneNumber,
};

const FormattedText: FC<Props> = ({
  type,
  customFormatter,
  children,
  ...props
}) => {
  const formatter: (value: string) => string | undefined =
    customFormatter ?? formatters[type || ''];

  return (
    <div {...props} className='text-nowrap'>
      {formatter !== undefined ? formatter(children) : children}
    </div>
  );
};

export default FormattedText;
