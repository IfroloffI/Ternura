import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number | undefined;
  height?: number | undefined;
  style?: NonNullable<JSX.IntrinsicElements['img']['style']>;
}
