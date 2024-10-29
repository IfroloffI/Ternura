import { chakra } from '@chakra-ui/react';
import {
  ChakraStylesConfig,
  Select as ChakraSelectOriginal,
  chakraComponents,
} from 'chakra-react-select';
import {
  ChangeEvent,
  ComponentProps,
  memo,
  ReactElement,
  useCallback,
  useMemo,
} from 'react';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export type Option = {
  label: string;
  value: string | number;
};

interface SelectProps extends ComponentProps<typeof ChakraSelectOriginal> {
  options: Option[];
  onChange: (e: ChangeEvent) => void;
  name: string;
  value: Option['value'];
  icon?: ReactElement;
  isMulti?: boolean;
  isPlaceholderGray?: boolean;
  fullwidth?: boolean;
  height?: string;
}

const ChakraSelect = chakra(ChakraSelectOriginal, {
  baseStyle: props => ({
    '& .chakra-divider': {
      display: 'none',
    },
    height: '100%',
    // minHeight: '42px',
    maxH: '100%',
    padding: 'auto',
    maxHeight: '100%',
    boxSizing: 'border-box',
    borderColor: '#CCCCCC',
    textColor: '#373737',
    cursor: 'pointer',
    userSelect: 'none',

    _hover: { bg: !props.isDisabled ? '#f4f8fe' : undefined },
    fields: {
      color: '#ff0000',
    },
  }),
});



type ChakraSelectOptions = ComponentProps<
  typeof ChakraSelectOriginal
>['options'];

interface IControlProps {
  children: ReactElement;
  props: Record<string, unknown>;
}

function Control({ children, ...props }: IControlProps) {
  const { icon } = props.selectProps;

  return (
    <chakraComponents.Control {...props}>
      <div className="flex items-center w-full h-full">
        {icon && (
          <div className={`${cx('icon-container')} max-h-full `}>{icon}</div>
        )}
        {children}
      </div>
    </chakraComponents.Control>
  );
}

const MemoizedControl = memo(Control);

function Select({
  options,
  onChange,
  className,
  name,
  icon,
  value,
  isMulti,
  fullwidth,
  isPlaceholderGray,
  height,
  ...restProps
}: SelectProps) {

  const chakraStyles: ChakraStylesConfig = {
    control: provided => ({
      ...provided,
      height: '100%',
    }),
    inputContainer: provided => {
      return {
        ...provided,
        pl: '6px',
        color: '#373737',
        textColor: '#373737',
        borderColor: '#CCCCCC',
        textWrap: 'nowrap',
        fontSize: '14px',
        maxH: '100%',
        padding: '6px 0px',
        minWidth: '100%',
      };
    },
    placeholder: provided => ({
      ...provided,
      fontSize: '14px',
      color: isPlaceholderGray? '#838383': '#373737',
      textWrap: 'nowrap',
    }),
    option: provided => ({
      ...provided,
      fontSize: '14px',
      color: '#373737',
      textColor: '#373737',
      width: '100%',
      textAlign: 'left',
      _selected: { backgroundColor: '#f4f8fe' },
    }),
    menuList: provided => ({
      ...provided,
      width: 'max-content',
      padding: 0,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      paddingStart: '0px',
    }),
    multiValue: provided => ({
      ...provided,
    }),
    singleValue: provided => ({
      ...provided,
      fontSize: '14px',
      textWrap: 'nowrap',
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxH: '100%',
      maxW: '100%',
    }),
    input: provided => ({
      ...provided,
      fontSize: '16px',
      textWrap: 'nowrap',
      textAlign: 'left',
    }),
  };

  const handleChange = useCallback(
    option => {
      const newValue = isMulti ? option.map(opt => opt.value) : option?.value;

      onChange({
        target: {
          name,
          value: newValue,
        },
      } as ChangeEvent);
    },
    [name, onChange, isMulti],
  );

  const selectValue = useMemo(
    () => options.find(({ value: optionValue }) => isEqual(optionValue, value)),
    [options, value],
  ) as ChakraSelectOptions[0];

  chakraStyles.control = provided => {
    let additionalStyles = {};

    if (fullwidth) {
      additionalStyles = {
        ...additionalStyles,
        // maxWidth: '100%',
        // width: '100%',
        // minWidth: '100%',
      };
    }

    if (!restProps.isSearchable) {
      additionalStyles = {
        ...additionalStyles,
        // minHeight: height,
        // height: height,
        // maxHeight: height,
      };
    }

    return {
      ...provided,
      ...additionalStyles,
    };
  };

  if (height) {
    chakraStyles.control = provided => ({
      ...provided,
      height,
    });
  }

  return (
    <ChakraSelect
      value={selectValue}
      className={className}
      components={{
        Control: MemoizedControl,
      }}
      icon={icon}
      options={options as ChakraSelectOptions}
      onChange={handleChange}
      formatOptionLabel={({ label }) => label}
      getOptionValue={({ value }) => value}
      chakraStyles={chakraStyles}
      menuPlacement="auto"
      width={fullwidth ? '100%' : undefined}
      height={height}
      isClearable
      isMulti={isMulti}
      autoFocus={false}
      textAlign="left"
      {...restProps}
    />
  );
}

export default memo(Select);
