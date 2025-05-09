import { cn } from 'lib/utils';
import React from 'react';

type Props = { title: string; className?: string };

function SectionDetailsHeading({ title, className }: Props) {
  return (
    <div>
      <h1 className={cn('text-center lg:text-4xl lg:mb-8 mb-6 mt-5 text-2xl  font-medium', className)}>{title}</h1>
    </div>
  );
}

export default SectionDetailsHeading;
