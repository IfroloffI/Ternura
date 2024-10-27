import { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLElement> {
  type: 'tel' | undefined;
  customFormatter?: (value: string) => string;
  children: string;
}
