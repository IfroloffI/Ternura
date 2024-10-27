import { cloneElement, memo, ReactElement, ReactNode, useMemo } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { InfoIconCustom } from '../icons/InfoIconCustom';

export enum InputWrapperLabelSize {
  MEDIUM = 'md',
  SMALL = 'sm',
}

export enum InputWrapperFieldSize {
  MEDIUM = 'md',
  SMALL = 'sm',
}

interface IInputField {
  children: ReactNode;
  label?: string;
  name: string;
  helperText?: string | ReactElement;
  helperTextClassName?: string;
  errorClassName?: string;
  fullwidth?: boolean;
  inlineField?: boolean;
  showErrorText?: boolean;
  hideErrors?: boolean;
  tooltip?: string;
  direction: 'row' | 'column';
  labelSize?: InputWrapperLabelSize;
  fieldSize?: InputWrapperFieldSize;
}

function InputField({
  children,
  name,
  label,
  helperText,
  inlineField = false,
  fullwidth = false,
  hideErrors = false,
  showErrorText = true,
  helperTextClassName,
  direction = 'column',
  tooltip,
  errorClassName,
  labelSize = InputWrapperLabelSize.MEDIUM,
  fieldSize = InputWrapperFieldSize.MEDIUM,
  ...restProps
}: IInputField) {
  const { getFieldProps, errors, touched: toucheds } = useFormikContext();

  const formikProps = getFieldProps(name);

  const input = cloneElement(children, {
    ...formikProps,
    ...children.props,
    name,
    size: fieldSize,
  });

  const error = errors[name];
  const touched = toucheds[name];

  const showError = error && touched;

  const labelWithInput = useMemo(() => {
    if (!inlineField) {
      return (
        <Stack
          direction={direction}
          alignItems={direction === 'row' ? 'center' : 'flex-start'}
          spacing={2}
        >
          {label && (
            <FormLabel
              size={labelSize}
              minW={direction === 'row' && '150px'}
              marginBottom={0}
              display="flex"
              marginEnd={0}
              fontWeight={600}
              width={direction === 'row' && '150px'}
              gap={2}
              alignContent="center"
              alignItems="center"
            >
              {label} {tooltip && <InfoIconCustom label={tooltip} />}
            </FormLabel>
          )}
          {input}
        </Stack>
      );
    }

    return (
      <Stack
        alignItems="center"
        direction="row"
        flexDir="row-reverse"
        justifyContent="flex-end"
        // className="!gap-3-x md:!gap-x-4 md:!gap-y-0 !gap-y-3"
        w={!fullwidth ? 'max-content' : '100%'}
      >
        {input}
        {label && (
          <FormLabel
            size={labelSize}
            fontWeight={600}
            width={direction === 'row' && '150px'}
            marginBottom={0}
            maxW="213px"
            display="flex"
            marginEnd={0}
            gap={2}
            alignContent="center"
            alignItems="center"
          >
            {label} {tooltip && <InfoIconCustom label={tooltip} />}
          </FormLabel>
        )}
      </Stack>
    );
  }, [inlineField, fullwidth, input, label, tooltip, direction, labelSize]);

  return (
    <FormControl
      isInvalid={showError && !hideErrors}
      maxW={!fullwidth ? 'max-content' : '100%'}
      {...restProps}
    >
      {labelWithInput}
      {showError && !hideErrors && showErrorText && (
        <FormErrorMessage className={errorClassName}>{error}</FormErrorMessage>
      )}

      {helperText && (
        <FormHelperText className={helperTextClassName}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default memo(InputField);
