import type { HTMLAttributes } from 'react';
import type React from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  leading: React.ReactNode;
  center: React.ReactNode;
  trailing: React.ReactNode;
}
