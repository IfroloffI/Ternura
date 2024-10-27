import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number | undefined;
  height?: number | undefined;
  variant?: string;
  style?: NonNullable<JSX.IntrinsicElements['img']['style']>;
}
