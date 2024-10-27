import { ReactNode, type HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  onDrop: (files: File[]) => void; // Это остается, если вы хотите иметь отдельный обработчик
}
