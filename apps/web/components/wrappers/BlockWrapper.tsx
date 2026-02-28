import React from 'react';
import type DivProps from '@/types/DivProps';
import { cn } from '@/lib/utils';

export const BlockWrapper = ({
  children,
  className,
  ...props
}: Readonly<DivProps>) => (
  <div className={cn('rounded-md p-4', className)} {...props}>
    {children}
  </div>
);
