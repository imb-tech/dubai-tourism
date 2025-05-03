import { ChevronRight } from 'lucide-react';
import React from 'react';
import CarCard from 'components/shared/car-card';
import { cn } from 'lib/utils';
import SectionHeading from 'components/ui/section-heading';

export default function Products({
  data = [],
  title = '',
  className,
}: {
  data: Product[];
  title: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="container mx-auto lg:px-0 px-3 ">
        <div className="flex items-center mb-5">
          <SectionHeading title={title} />
          <ChevronRight />
        </div>
        <div className="flex overflow-x-auto lg:overscroll-x-none  scrollbar-hide lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((s) => (
            <CarCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
