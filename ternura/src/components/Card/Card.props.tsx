import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  photos: string[];
  name: string;
  surname: string;
  years: number;
  hobbies: string[];
}