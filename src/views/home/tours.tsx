import TourCard from 'components/shared/tour-card';
import SectionHeading from 'components/ui/section-heading';
import { ChevronRight } from 'lucide-react';
import React from 'react';

export default function Tours({tours}: {
  tours: {name:string, image:string}[]
}) {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <div className="flex items-center mb-5">
        <SectionHeading title={'Tour packages '} />
        <ChevronRight className='mt-1' />
      </div>
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
        {tours.map((s, i) => (
          <TourCard key={s.name} index={i} {...s} />
        ))}
      </div>
    </div>
  );
}
