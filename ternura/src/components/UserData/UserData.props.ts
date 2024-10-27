import type { HTMLAttributes, ReactElement } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  fullName: string;
  phone: string;
  rightIcon?: ReactElement;
  photoUrl?: string;
  enableChangePhoto?: boolean;
  photoVariant?: 'filled' | 'outlined' | 'outlined-clear';
}
