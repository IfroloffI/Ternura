import { HTMLAttributes, ReactNode } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  navBar: ReactNode;
  actions: ReactNode;
}
