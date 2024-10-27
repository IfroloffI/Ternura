import { ComponentProps, memo, ReactNode } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';

import { getInputNumbersValue } from './helpers';

export interface InputProps extends ComponentProps<typeof ChakraInput> {
  unit?: ReactNode;
  fullwidth?: boolean;
  fullheight?: boolean;
  autoFocus?: boolean;
  enableMask?: boolean;
}

export enum Unit {
  METER = 'meter',
  SQUARED_METER = 'squared_meter',
  RUBBLE = 'rubble',
}


function Input({
  unit,
  fullwidth,
  fullheight,
  onChange,
  name,
  autoFocus,
  enableMask = false,
  ...restProps
}: InputProps) {
  const handleInputChange = value => {
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  const handleKeyDown = e => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      handleInputChange('');
    }

    handleInputChange(e.target.value);
  };

  const handleInput = e => {
    const input = e.target;
    const { selectionStart } = input;

    let formattedInputValue = '';

    let inputNumbersValue = getInputNumbersValue(input.value);

    if (!inputNumbersValue) {
      handleInputChange('');
    }

    if (input.value.length !== selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') {
        inputNumbersValue = `7${inputNumbersValue}`;
      }
      const firstSymbols = '+7';
      formattedInputValue = input.value = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }

    handleInputChange(formattedInputValue);
  };

  const handlePaste = e => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
      }
    }
  };

  const inputProps = enableMask
    ? {
        onKeyDown: handleKeyDown,
        onInput: handleInput,
        onPaste: handlePaste,
      }
    : {
        onChange,
      };

  return (
    <InputGroup {...restProps} className="!w-full">
      <ChakraInput
        {...inputProps}
        name={name}
        autoFocus={autoFocus}
        className="hover:!bg-[#f4f8fe]"
        height={fullheight ? '3.7rem' : undefined}
        width={fullwidth ? '100%' : undefined}
        {...restProps}
        borderColor={'#CCCCCC'}
        borderRight={unit ? 'none' : undefined}
      />
    </InputGroup>
  );
}

export default memo(Input) as typeof Input;
