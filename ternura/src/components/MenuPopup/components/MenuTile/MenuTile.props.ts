import { ReactNode } from 'react';

export default interface Props {
  active?: boolean;
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}
