import { cn } from 'lib/utils';
import React from 'react';

type Props = { title: string; className?: string };

function SectionHeading({ title, className }: Props) {
  return (
    <div>
      <h1 className={cn('lg:text-3xl text-2xl sm:text-start text-center font-semibold', className)}>{title}</h1>
    </div>
  );
}

export default SectionHeading;
