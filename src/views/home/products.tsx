import { ChevronRight } from 'lucide-react';
import React from 'react';
import CarCard from 'components/shared/car-card';
import { cn } from 'lib/utils';
import SectionHeading from 'components/ui/section-heading';
import { CustomCarousel } from 'components/custom/carousel';

export default function Products({
  data = [],
  title = '',
  className,
  autoplayDelay,
  url,
}: {
  data: Product[];
  title: string;
  className?: string;
  autoplayDelay?: number;
  url?: string;
}) {
  const slides = data.map((s) => <CarCard key={s.id} {...s} url={url} />);
  return (
    <div className={cn(className)}>
      <div className="container mx-auto lg:px-0 px-3 ">
        <div className="flex items-center mb-5">
          <SectionHeading title={title} />
          <ChevronRight className="mt-1" />
        </div>
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slides}
        </div>
        <div className="sm:hidden">
          <CustomCarousel items={slides} autoplayDelay={autoplayDelay} />
        </div>
      </div>
    </div>
  );
}
