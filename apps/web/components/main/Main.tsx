import type DivProps from '@/types/DivProps';
import { cn } from '@/lib/utils';
import { BlockWrapper } from '@/components/wrappers/BlockWrapper';

export const Main = ({ className, ...props }: DivProps) => (
  <BlockWrapper {...props} className={cn('bg-gray-50', className)}>
    <h1>Main</h1>
  </BlockWrapper>
);
